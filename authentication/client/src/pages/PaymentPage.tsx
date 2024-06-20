import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import GetClientSecret from '../components/GetClientSecret';
import CheckoutForm from '../components/Checkout';
import io from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const socket = io('http://localhost:8000'); // Adjust the URL to your server
const stripePromise = loadStripe('pk_test_51PQ4QNSBBn4uGp4qK8YmT6maHlJzaSekMHITS80R9eT1xS3vFjQIk8N3MH2bvohNYNhlaUQ14BuEBlaXZYQ2SNRY006NnArEIJ');

const PaymentPage: React.FC = () => {
    const [clientSecret, setClientSecret] = useState<string>('');
    const [options, setOptions] = useState<any>(null);

    const handleSuccess = (secret: string) => {
        setClientSecret(secret);
        const options = {
            clientSecret: secret,
        };
        setOptions(options);
    };

    useEffect(() => {
        const userId = 'user123'; // Replace with the actual user ID
        socket.emit('authenticate', userId);
        
        socket.on('notification', (message) => {
            toast.success(message);
        });
        
        socket.on('connect', () => {
            console.log('Connected to server');
        });
    
        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });
    
        // return () => {
        //     socket.disconnect();
        // };
    }, []);

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 mb-3">
                        <GetClientSecret onSuccess={handleSuccess} onError={console.error} />
                    </div>
                    {clientSecret && options && (
                        <div className="col-md-6 mb-3">
                            <Elements stripe={stripePromise} options={options}>
                                <CheckoutForm clientSecret={clientSecret} />
                            </Elements>
                        </div>
                    )}
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default PaymentPage;
