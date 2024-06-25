import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';
import ejs from 'ejs';
import { fileURLToPath } from 'url';

// Replace with your Resend API key
const resend = new Resend('re_Xcz1FiP3_9gG49UK7WuzpMnmbGvsRpKpT');

// Get the current file's directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sendEmail = async (to, from, subject, templateName, templateData) => {
  // Resolve the path to the template file
  const templatePath = path.join(__dirname, 'emails', `${templateName}.ejs`);
  // Read the template file
  const template = fs.readFileSync(templatePath, 'utf-8');
  // Render the template with the provided data
  const html = ejs.render(template, templateData);

  try {
    // Send the email using Resend
    const response = await resend.emails.send({
      from: from,
      to: to,
      subject: subject,
      html: html,
    });
    console.log('Email sent successfully:', response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// // Example usage for activating subscription
// sendEmail(
//   'john.t@bizdesire.com',    // Change to your sender
//   'onboarding@resend.dev',
//   'Activate Your Subscription',
//   'activateSubscription',
//   { name: 'John Taylor', activationLink: 'http://localhost:3000/subscription' }
// );

// Example usage for onboarding
// sendEmail(
//   'john.t@bizdesire.com',  // Change to your recipient
//   'onboarding@resend.dev',     // Change to your sender
//   'Welcome Onboard!',
//   'onboarding',
//   { name: 'John Doe', guideLink: 'https://example.com/guide', supportLink: 'https://example.com/support' }
// );

// // Example usage for password recovery
// sendEmail(
//   'recipient@example.com',  // Change to your recipient
//   'sender@example.com',     // Change to your sender
//   'Password Recovery',
//   'passwordRecovery',
//   { name: 'John Doe', resetLink: 'https://example.com/reset?token=12345' }
// );

export { sendEmail };
