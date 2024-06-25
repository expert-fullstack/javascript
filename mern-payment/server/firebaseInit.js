import admin from 'firebase-admin';

const googleApplicationCredentials = process.env.GOOGLE_APPLICATION_CREDENTIALS;

const serviceAccount = googleApplicationCredentials;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const messaging = admin.messaging();