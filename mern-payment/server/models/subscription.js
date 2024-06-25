// models/Subscription.js

import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
  paypalWebhookId: String,
  eventVersion: String,
  createTime: Date,
  resourceType: String,
  resourceVersion: String,
  eventType: String,
  summary: String,
  resource: {
    shippingAmount: {
      currencyCode: String,
      value: String
    },
    startTime: Date,
    quantity: String,
    subscriber: {
      emailAddress: String,
      name: {
        givenName: String,
        surname: String
      },
      shippingAddress: {
        name: {
          fullName: String
        },
        address: {
          addressLine1: String,
          addressLine2: String,
          adminArea2: String,
          adminArea1: String,
          postalCode: String,
          countryCode: String
        }
      }
    },
    createTimePaypal: Date,
    links: [
      {
        href: String,
        rel: String,
        method: String
      }
    ],
    id: String,
    planOverridden: Boolean,
    planId: String,
    status: String
  },
  links: [
    {
      href: String,
      rel: String,
      method: String
    }
  ]
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;
