// EmailJS Configuration
// 
// SETUP INSTRUCTIONS:
// 1. Go to https://www.emailjs.com/ and sign up for a free account
// 2. Create an Email Service:
//    - Click on "Email Services" in the dashboard
//    - Click "Add New Service"
//    - Choose your email provider (Gmail, Outlook, etc.)
//    - Follow the setup instructions
//    - Copy the Service ID (e.g., "service_xxxxx")
//
// 3. Create an Email Template:
//    - Click on "Email Templates" in the dashboard
//    - Click "Create New Template"
//    - Use these template variables in your template:
//      - {{from_name}} - Sender's name
//      - {{from_email}} - Sender's email
//      - {{subject}} - Email subject
//      - {{message}} - Email message
//      - {{reply_to}} - Reply-to email (same as from_email)
//    - Set "To Email" to your email address (sonamnimje27@gmail.com)
//    - Set "From Name" to {{from_name}}
//    - Set "From Email" to {{from_email}}
//    - Set "Reply To" to {{reply_to}} (so you can reply directly)
//    - Set "Subject" to {{subject}}
//    - In the message body, include ALL details:
//      Name: {{from_name}}
//      Email: {{from_email}}
//      Subject: {{subject}}
//      Message: {{message}}
//    - Copy the Template ID (e.g., "template_xxxxx")
//
// 4. Get your Public Key:
//    - Go to "Account" > "General"
//    - Copy your Public Key (e.g., "xxxxxxxxxxxxx")
//
// 5. Replace the values below with your credentials:

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_j2bljai',        // Replace with your Service ID
  TEMPLATE_ID: 'template_5lltwhv',      // Replace with your Template ID
  PUBLIC_KEY: 'h5ts73AIZYLx-rLq-'         // Replace with your Public Key
};
