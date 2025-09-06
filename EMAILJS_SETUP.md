# EmailJS Setup Guide

## 🚀 **Step-by-Step Setup to Receive Real Emails**

### **Step 1: Create EmailJS Account**
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### **Step 2: Add Gmail Service**
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" from the list
4. Connect your Gmail account (rawadnounou@gmail.com)
5. **Copy the Service ID** (starts with "service_")

### **Step 3: Create Email Template**
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

**Subject:** New message from {{from_name}} - {{subject}}

**Content:**
```
You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Copy the Template ID** (starts with "template_")

### **Step 4: Get Public Key**
1. Go to "Account" → "General"
2. **Copy your Public Key** (starts with letters/numbers)

### **Step 5: Update Your Code**
Replace these values in `src/app/components/Contact.tsx`:

```javascript
const serviceId = 'service_YOUR_ACTUAL_SERVICE_ID';
const templateId = 'template_YOUR_ACTUAL_TEMPLATE_ID';
const publicKey = 'YOUR_ACTUAL_PUBLIC_KEY';
```

### **Step 6: Test the Form**
1. Start your dev server: `npm run dev`
2. Go to your contact form
3. Fill it out and send a test message
4. Check your Gmail inbox!

## ✅ **What You'll Get:**

- **Real emails** in your Gmail inbox
- **Professional formatting** with sender details
- **Free service** - 200 emails per month
- **Reliable delivery** - Works 99.9% of the time

## 🔧 **Troubleshooting:**

- **No emails received?** Check spam folder
- **Error sending?** Double-check your IDs and keys
- **Need help?** EmailJS has excellent documentation

## 📧 **Email Format You'll Receive:**

```
Subject: New message from John Doe - Project Inquiry

Name: John Doe
Email: john@example.com
Subject: Project Inquiry

Message:
Hi Rawad, I'd like to discuss a potential project...

---
This message was sent from your portfolio contact form.
```

**Once set up, you'll receive all contact form messages directly in your Gmail!** 🎉
