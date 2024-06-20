import Stripe from 'stripe';
import asyncHandler from 'express-async-handler';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Corrected typo in environment variable name

const createPaymentIntent = asyncHandler(async (req, res) => {
    console.log('Creating payment intent...');
    const { amount ,name ,email} = req.body;
    try {



        const customer = await stripe.customers.create({
            name,
            email,
        });
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            customer: customer.id,
            currency: "inr",
            description: "Software development services",
            payment_method_types: ["card"],
          });
        res.status(200).send({
            clientSecret: paymentIntent.client_secret
        });
    } catch (error) {
        res.status(500).send({
            error: error.message
        });
    }
});

export {
    createPaymentIntent
};
