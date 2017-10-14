require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages.create({
	to: process.env.MY_PHONE_NUMBER,
	from: '+16466633058',
	body: "hey :D"
})
.then((message) => console.log(message.sid));