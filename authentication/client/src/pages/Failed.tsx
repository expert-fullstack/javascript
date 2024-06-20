import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FailedPage: React.FC = () => {
  useEffect(() => {
    toast.error('Payment Failed');
  }, []);

  return (
    <div>
      <h1>Payment Failed</h1>
      <p>Unfortunately, your payment was not successful.</p>
      <ToastContainer />
    </div>
  );
};

export default FailedPage;
