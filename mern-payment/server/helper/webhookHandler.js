import "dotenv/config";

import crypto from "crypto";
import crc32 from "buffer-crc32";

import fs from "fs/promises";
import fetch from "node-fetch";

import { sendEmail } from "../utils/sendMail.js";
import { saveOrUpdateSubscription } from "../services/subscription.service.js";
const WEBHOOK_ID = process.env.PAYPAL_WEBHOOK_ID;
const CACHE_DIR = ".";
async function downloadAndCache(url, cacheKey) {
  if (!cacheKey) {
    cacheKey = url.replace(/\W+/g, "-");
  }
  const filePath = `${CACHE_DIR}/${cacheKey}`;

  // Check if cached file exists
  const cachedData = await fs.readFile(filePath, "utf-8").catch(() => null);
  if (cachedData) {
    return cachedData;
  }

  // Download the file if not cached
  const response = await fetch(url);
  const data = await response.text();
  await fs.writeFile(filePath, data);

  return data;
}

async function verifySignature(event, headers) {
  const transmissionId = headers["paypal-transmission-id"];
  const timeStamp = headers["paypal-transmission-time"];
  const crc = parseInt("0x" + crc32(event).toString("hex")); // hex crc32 of raw event data, parsed to decimal form

  const message = `${transmissionId}|${timeStamp}|${WEBHOOK_ID}|${crc}`;

  const certPem = await downloadAndCache(headers["paypal-cert-url"]);

  // Create buffer from base64-encoded signature
  const signatureBuffer = Buffer.from(
    headers["paypal-transmission-sig"],
    "base64"
  );

  // Create a verification object
  const verifier = crypto.createVerify("SHA256");

  // Add the original message to the verifier
  verifier.update(message);

  return verifier.verify(certPem, signatureBuffer);
}

const handleWebhookEvent = async (request, response) => {
  const headers = request.headers;
  const event = request.body;
  const data = JSON.parse(event);

  const isSignatureValid = await verifySignature(event, headers);

  if (isSignatureValid) {
    // Successful receipt of webhook, do something with the webhook data here to process it, e.g. write to database
    // Extract event type from PayPal webhook event
    const eventType = data.event_type || "";
    // Perform actions based on different event types
    switch (eventType) {
      case "BILLING.SUBSCRIPTION.CREATED":
        // Example action for completed payment capture
        await saveOrUpdateSubscription(data);
        break;
      case "PAYMENT.CAPTURE.COMPLETED":
        // Example action for completed payment capture
        console.log(data);
        break;
      case "BILLING.SUBSCRIPTION.ACTIVATED":
        // Example action for completed payment capture
        await saveOrUpdateSubscription(data);
        await sendEmail(
          "john.t@bizdesire.com", // Change to your sender
          "onboarding@resend.dev",
          "Activate Your Subscription",
          "activateSubscription",
          {
            name: "John Taylor",
            activationLink: "http://localhost:3000/subscription",
          }
        );
        break;
      case "BILLING.SUBSCRIPTION.CANCELLED":
        // Example action for cancelled subscription
        console.log(data);
        break;
      default:
        // Handle other event types or log them for debugging
        console.log(`Unhandled event type: ${eventType}`);
        break;
    }
  } else {
    console.log(
      `Signature is not valid for ${data?.id} ${headers?.["correlation-id"]}`
    );
    // Reject processing the webhook event. May wish to log all headers+data for debug purposes.
  }

  // Return a 200 response to mark successful webhook delivery
  response.sendStatus(200);
};

export { handleWebhookEvent };
