import { firebase } from "../Services/Firebase.js";
import * as dotenv from 'dotenv'
dotenv.config();

import twilio from 'twilio';

const serviceID = process.env.SERVICE_ID;
const authToken = process.env.AUTH_TOKEN;

const client = twilio(serviceID, authToken);


export const sendOTP = async (req, res) => {
  const fromPhoneNumber = process.env.PHONE_NUMBER;
  const message = `Your OTP code is: ${req.body.otp}` ;
  try {
    if (!req.body.phoneNumber) {
      return res.status(400).json({ error: 'Phone number is required' });
    }

    await client.messages.create({
      from: fromPhoneNumber,
      body: message,
      to: req.body.phoneNumber
    });

    return res.json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    return res.status(500).json({ error: 'Failed to send OTP' });
  }
};


// export const sendOTP = async (req, res) => {
// const phoneNumber = "+917603936051";
// try {
//   if (!phoneNumber) {
//     return res.status(400).json({ error: 'Phone number is required' });
//   }

//  const otpSent = await firebase.auth().sendSignInLinkToEmail(phoneNumber, {
//     url: 'http://localhost:7000', // Replace with your app's URL
//     handleCodeInApp: true,
//   });

//   // Return success response
//   res.json({ message: 'OTP sent successfully' , otpSent});
// } catch (error) {
//   console.error('Error sending OTP:', error);
//   res.status(500).json({ error: 'Failed to send OTP' });
// }
// };
