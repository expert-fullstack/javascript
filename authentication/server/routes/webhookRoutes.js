import express from 'express';
import { handleWebhook } from '../controllers/webhookController.js';
import bodyParser from 'body-parser';

const router = express.Router();

// Middleware to parse raw request body
const rawBodySaver = (req, res, buf, encoding) => {
    if (buf && buf.length) {
        req.rawBody = buf.toString(encoding || 'utf8');
    } else {
        console.log('Buffer is empty or undefined');
    }
};

// The raw body parser needs to be applied before any other body parsers
const rawBodyMiddleware = bodyParser.raw({ type: '*/*', verify: rawBodySaver });

// Apply the raw body middleware
router.post('/', rawBodyMiddleware, handleWebhook);

export default router;
