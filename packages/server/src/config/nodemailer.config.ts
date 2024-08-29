
import nodemailer from 'nodemailer';
import { CONSTANTS } from '../utils/constants.utils';
//
// export const NodemailerTransport = nodemailer.createTransport({
//   host: CONSTANTS.NODEMAILER_HOST,
//   auth: {
//     user: CONSTANTS.NODEMAILER_USER,
//     pass: CONSTANTS.NODEMAILER_PASSWORD
//   }
// });

export var NodemailerTransport = nodemailer.createTransport({
  service: 'gmail', // Use your email service provider
  auth: {
    user: CONSTANTS.NODEMAILER_USER_TEST, // Your email address
    pass: CONSTANTS.NODEMAILER_Pass_TEST,  // Your email password (use environment variables for security)
  },

});
