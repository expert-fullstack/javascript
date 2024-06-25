import React from 'react';

const SuccessPage: React.FC = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1>Payment Successful!</h1>
                    <p>Your payment was successfully processed.</p>
                </div>
            </div>
        </div>
    );
}

export default SuccessPage;
