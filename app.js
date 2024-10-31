// Import Twilio module
const twilio = require('twilio');

// Twilio credentials from your Twilio account
const accountSid = 'your_account_sid'; // Replace with your Account SID
const authToken = 'your_auth_token';   // Replace with your Auth Token

// Create Twilio client
const client = twilio(accountSid, authToken);

// Send SMS function
function sendSMS(to, message) {
    client.messages
        .create({
            body: message,
            from: 'your_twilio_number', // Replace with your Twilio number
            to: to
        })
        .then(message => console.log(`Message sent with SID: ${message.sid}`))
        .catch(error => console.error('Error sending SMS:', error));
}

// Example usage
sendSMS('+1234567890', 'Hello from SDN!');
sendSMS('+6523562000', 'OTP');
sendSMS('+1234567890', 'Order confirmed');
sendSMS('+1234567890', 'Order confirmed');

sendSMS('+1234567890', 'Order confirmed');

sendSMS('+1234567890', 'Order confirmed');

