import { core } from '@paypal/checkout-server-sdk';

function environment() {
  let clientId = process.env.PAYPAL_CLIENT_ID || 'YOUR_SANDBOX_CLIENT_ID';
  let clientSecret = process.env.PAYPAL_CLIENT_SECRET || 'YOUR_SANDBOX_CLIENT_SECRET';

  return new core.SandboxEnvironment(clientId, clientSecret);
}

function paypalClient() {
  return new core.PayPalHttpClient(environment());
}

export { paypalClient };
