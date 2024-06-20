import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = 'http://localhost:8000/api/stripe/createPaymentIntent';

interface GetClientSecretProps {
    onSuccess: (clientSecret: string) => void;
    onError: (error: string) => void;
}

const GetClientSecret: React.FC<GetClientSecretProps> = ({ onSuccess, onError }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState<number | string>('');

    const handleClick = async () => {
        try {
            const response = await axios.post(API_URL, {
                amount: parseInt(amount.toString(), 10), // Amount in cents
                name,
                email,
            });
            onSuccess(response.data.clientSecret);
        } catch (error) {
            console.error('Error creating PaymentIntent:', error);
            onError('Error creating PaymentIntent');
        }
    };

    return (
        <div className="container mt-5">
            <form>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        id="amount"
                        placeholder="Amount $"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                    <label htmlFor="amount">Amount $</label>
                </div>
                <button type="button" onClick={handleClick} className="btn btn-primary">CheckOut</button>
            </form>
        </div>
    );
};

export default GetClientSecret;
