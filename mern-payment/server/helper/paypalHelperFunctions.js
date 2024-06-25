import axios from 'axios';

const paypalApi = process.env.PAYPAL_API;
const paypalClientId = process.env.PAYPAL_CLIENT_ID;
const paypalClientSecret = process.env.PAYPAL_CLIENT_SECRET;

// Helper function to get access token
const getPaypalAccessToken = async () => {
    const response = await axios.post(`${paypalApi}/v1/oauth2/token`, 'grant_type=client_credentials', {
      auth: {
        username: paypalClientId,
        password: paypalClientSecret
      }
    });
    return response.data.access_token;
  };
  export { getPaypalAccessToken };