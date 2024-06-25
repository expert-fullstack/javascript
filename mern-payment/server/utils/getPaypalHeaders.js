// paypalUtils.js
import { getPaypalAccessToken } from '../helper/paypalHelperFunctions.js';

const getPaypalHeaders = async (requestIdPrefix = 'REQUEST') => {
  try {
    const accessToken = await getPaypalAccessToken();
    const requestId = `${requestIdPrefix}-${Date.now()}`;
    
    return {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'PayPal-Request-Id': requestId,
      Prefer: 'return=minimal',
    };
  } catch (error) {
    console.error('Error getting PayPal headers:', error);
    throw new Error('Could not get PayPal headers');
  }
};

export { getPaypalHeaders };
