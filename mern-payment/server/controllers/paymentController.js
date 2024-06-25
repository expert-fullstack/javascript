import paypal from "@paypal/checkout-server-sdk";
import { paypalClient } from "../config/PaymentClient.js";
import asyncHandler from "express-async-handler";

const createPayment = asyncHandler(async (req, res) => {
  let request;
  request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "1.00", // replace with dynamic value
        },
      },
    ],
  });

  try {
    const order = await paypalClient().execute(request);
    console.log('order',order.result.status);
    res.json({ id: order.result.id });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

const getPayment = asyncHandler(async (req, res) => {
  const orderId = req.body.orderId;
  const request = new paypal.orders.OrdersCaptureRequest(orderId);
  request.requestBody({});

  try {
    const capture = await paypalClient().execute(request);
    res.json({ capture });
  } catch (err) {
    res.status(500).send(err);
  }
});

export { createPayment, getPayment };
