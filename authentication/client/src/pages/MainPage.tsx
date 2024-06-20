import React from 'react';
import { useNavigate } from 'react-router-dom';
const HomePage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="home-page">
            <div className="background"></div>
            <div className="foreground">
                <div className="content">
                    <h1>Welcome to Our Website</h1>
                    <p>At Bizdesire, we specialize in integrating Stripe payment solutions into your website, mobile apps, and other digital platforms. Whether you're looking to streamline your checkout process, implement subscription services, or enhance your e-commerce capabilities, our team is here to help.</p>
                    <button className="btn btn-primary btn-lg" onClick={()=>navigate("/payment")}>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
