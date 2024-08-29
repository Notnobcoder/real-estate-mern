import { NodemailerTransport } from "../config/nodemailer.config";
import { CONSTANTS } from "../utils/constants.utils";

NodemailerTransport

const RegisterEmail = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Email</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            color: #333;
        }

        .email-container {
            background-color: #ffffff;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .header {
            text-align: center;
            padding: 20px 0;
        }

        .header img {
            max-width: 100px;
        }

        .header h1 {
            font-size: 24px;
            margin: 10px 0;
            color: #5e72e4;
        }

        .content {
            padding: 20px;
            text-align: center;
        }

        .content p {
            font-size: 16px;
            line-height: 1.5;
            margin: 10px 0;
        }

        .verification-code {
            display: inline-block;
            padding: 10px 20px;
            margin: 20px 0;
            background-color: #5e72e4;
            color: #ffffff;
            font-size: 18px;
            font-weight: bold;
            letter-spacing: 2px;
            border-radius: 4px;
        }

        .footer {
            text-align: center;
            padding: 20px 0;
            font-size: 12px;
            color: #888888;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <div class="header">
            <img src="https://via.placeholder.com/100" alt="Logo">
            <h1>Welcome to Our Service!</h1>
        </div>
        <div class="content">
            <p>Hi <strong>{{name}}</strong>,</p>
            <p>Thank you for registering with us. We're excited to have you on board!</p>
            <p>Please use the verification code below to complete your registration:</p>
            <div class="verification-code">{{verification_code}}</div>
            <p>If you did not create an account, please ignore this email.</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 Our Service. All rights reserved.</p>
            <p>1234 Some Street, Some City, Some Country</p>
        </div>
    </div>
</body>

</html>

`
export async function sendWelcomeEmail(userEmail: string, userName: string, verificationCode: string) {

  // Replace placeholders in the template with actual data
  const emailContent = RegisterEmail
    .replace('{{name}}', userName)
    .replace('{{verification_code}}', verificationCode);

  // Send email with defined transport object
  let info = await NodemailerTransport.sendMail({
    from: CONSTANTS.NODEMAILER_HOST,
    to: userEmail, // Recipient email address
    subject: 'Welcome to Our Service!', // Subject line
    html: emailContent, // HTML body content
  });

  console.log('Message sent: %s', info.messageId);
}
