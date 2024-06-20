import Stripe from 'stripe';
import asyncHandler from 'express-async-handler';
import { sendNotificationToUser } from '../helpers/socketHelper.js';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const stripe_webhook_key = new Stripe(process.env.STRIPE_WEBOOK_SECRET_KEY);

const handleWebhook = asyncHandler(async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const rawBody = req.rawBody;

    if (!rawBody) {
        console.error('No webhook payload was provided');
        res.status(400).send('No webhook payload was provided');
        return;
    }

    let event;

    try {
        event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBOOK_SECRET_KEY);
    } catch (err) {
        console.error('Webhook Error:', err.message);
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }

    switch (event.type) {
        case 'payment_intent.canceled':
            console.log('Payment Intent Canceled:', event.data.object);
            break;
        case 'payment_intent.created':
            console.log('Payment Intent Created:');
            // Log payment success and send an appropriate response
            break;
        case 'payment_intent.payment_failed':
            console.log('Payment Intent Payment Failed:', event.data.object);
            break;
        case 'payment_intent.processing':
            console.log('Payment Intent Processing:', event.data.object);
            break;
        case 'payment_intent.succeeded':
            console.log('Payment Intent Succeeded:', event.data.object);
            const userId = event.data.object.customer; // Replace with the actual way to get the user ID
            const message = 'Your payment was successful!';
            sendNotificationToUser('user123', message);
            break;
        case 'payment_intent.requires_action':
            console.log('Payment Intent requires action:', event.data.object);
            break;
            
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    // Return a response to acknowledge receipt of the event
    res.json({ received: true });
});

export {
    handleWebhook
};
