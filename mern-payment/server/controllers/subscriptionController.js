import asyncHandler from "express-async-handler";
import { sendNotificationToClient } from "../helper/notify.js";
import { getPaypalAccessToken } from "../helper/paypalHelperFunctions.js";
import axios from "axios";
const paypalApi = process.env.PAYPAL_API;

const createSubscriptionPlan = asyncHandler(async (req, res) => {
  const accessToken = await getPaypalAccessToken();
  const planData = {
    product_id: "PROD-7W324787DJ3429335",
    name: "Video Streaming Service Plan",
    description: "Video Streaming Service basic plan",
    status: "ACTIVE",
    billing_cycles: [
      {
        frequency: { interval_unit: "MONTH", interval_count: 1 },
        tenure_type: "TRIAL",
        sequence: 1,
        total_cycles: 2,
        pricing_scheme: { fixed_price: { value: "3", currency_code: "USD" }},
      },
      {
        frequency: {
          interval_unit: "MONTH",
          interval_count: 1,
        },
        tenure_type: "TRIAL",
        sequence: 2,
        total_cycles: 3,
        pricing_scheme: {
          fixed_price: {
            value: "6",
            currency_code: "USD",
          },
        },
      },
      {
        frequency: { interval_unit: "MONTH", interval_count: 1 },
        tenure_type: "REGULAR",
        sequence: 3,
        total_cycles: 12,
        pricing_scheme: { fixed_price: { value: "10", currency_code: "USD" } },
      },
    ],
    payment_preferences: {
      auto_bill_outstanding: true,
      setup_fee: { value: "10", currency_code: "USD" },
      setup_fee_failure_action: "CONTINUE",
      payment_failure_threshold: 3,
    },
    taxes: { percentage: "10", inclusive: false },
  };

  try {
    const response = await axios.post(
      `${paypalApi}/v1/billing/plans`,
      planData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const createSubscription = asyncHandler(async (req, res) => {
  const subscriptionData = {
    plan_id: req.body.plan_id,
    start_time: new Date(
      new Date().setDate(new Date().getDate() + 1)
    ).toISOString(), // Start time set to tomorrow
    shipping_amount: {
      currency_code: "USD",
      value: "10.00",
    },
    subscriber: {
      name: {
        given_name: "FooBuyer",
        surname: "Jones",
      },
      email_address: "foobuyer@example.com",
      shipping_address: {
        name: {
          full_name: "John Doe",
        },
        address: {
          address_line_1: "2211 N First Street",
          address_line_2: "Building 17",
          admin_area_2: "San Jose",
          admin_area_1: "CA",
          postal_code: "95131",
          country_code: "US",
        },
      },
    },
    application_context: {
      brand_name: "Example Inc",
      locale: "en-US",
      shipping_preference: "SET_PROVIDED_ADDRESS",
      user_action: "SUBSCRIBE_NOW",
      payment_method: {
        payer_selected: "PAYPAL",
        payee_preferred: "IMMEDIATE_PAYMENT_REQUIRED",
      },
      return_url: "http://localhost:3000/success",
      cancel_url: "https://example.com/cancel",
    },
  };
  try {
    const accessToken = await getPaypalAccessToken();
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${paypalApi}/v1/billing/subscriptions`,
      headers: {
        "Content-Type": "application/json",
        "PayPal-Request-Id": "d0f8ee7b-f980-46b1-80d6-ac657ff1abc9",
        Prefer: "return=minimul",
        Authorization: `Bearer ${accessToken}`,
      },
      data: JSON.stringify(subscriptionData),
    };
    const response = await axios.request(config);
    const notificationData = {
      title: "Subscription Initiated",
      body: "Your subscription has been activated",
    };
    sendNotificationToClient(
      "dpAH_x0GvU9qhZs9nxou7c:APA91bEAssVfDXnTTWaBhXwqzmgRODjoYeGXoM9YLLGcf3EtN1zNBTfA81sgaWTXtlPRfTGFBKO-1xxfohwuTZrThYh1b8NkaMJLwcaoog3dPsTveTNJWHTzO7aO01J1fR2pX0NH-Ez5",
      notificationData
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
export { createSubscriptionPlan, createSubscription };
