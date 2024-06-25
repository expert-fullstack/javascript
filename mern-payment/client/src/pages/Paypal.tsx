import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PayPalButton: React.FC = () => {
  const navigate = useNavigate();
  const clientId = 'PAYPAL_CLIENT_ID' ;
  const createOrder = () => {
    return axios
      .post('http://localhost:8000/api/paypal/create-payment')
      .then((response) => response.data.id)
      .catch((error) => {
        console.error('Error creating PayPal payment:', error);
        throw error;
      });
  };

  const onApprove = (data: any, actions: any) => {
    return axios
      .post('http://localhost:8000/api/paypal/get-payment', { orderId: data.orderID })
      .then((response) => {
        console.log('Payment approved:', response.data);
        navigate('/success');
      })
      .catch((error) => {
        console.error('Error capturing PayPal payment:', error);
        throw error;
      });
  };

  return (
    <PayPalScriptProvider options={{ clientId}}>
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
