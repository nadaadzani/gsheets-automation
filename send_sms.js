require('dotenv').config();
// Download the helper library from https://www.twilio.com/docs/node/install
const twilio = require("twilio"); // Or, for ESM: import twilio from "twilio";

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phoneNumber = process.env.TWILIO_PHONE_NUMBER;
const personalPhoneNumber = process.env.PERSONAL_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

// As of now, trial accounts can only send messages to verified phone numbers. Your personal phone number must be verified in the Twilio console before you can receive messages from your Twilio account.
// Plus there might be some unknown-but-existing international laws that prevent you from sending messages to certain countries.
// If you came across a need for Sender ID, you'd have to upgrade your subscription.

async function createMessage() {
  const message = await client.messages.create({
    body: "Testing",
    from: phoneNumber,
    to: personalPhoneNumber,
  });

  console.log(message.body);
}

createMessage();
