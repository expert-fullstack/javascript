// import { messaging } from '../firebaseInit';
import { messaging } from '../firebaseInit.js';

const sendNotificationToClient = (token, data) => {
  const message = {
    notification: {
      title: data.title,
      body: data.message,
    },
    token,
  };
  // Send a message to the devices corresponding to the provided registration tokens.
  messaging.send(message)
  .then((response) => {
    // Response is an object of the form { responses: [] }
   console.log(response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });
};

export { sendNotificationToClient };
