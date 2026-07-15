const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ 1. Dono URLs ko allowed array mein daal diya hai
const allowedOrigins = [
    'http://localhost:5175',                      // Local development ke liye
    'https://portfolio-mimi-z3uv.vercel.app'      // Aapka live frontend URL 🚀
];

// ✅ 2. Ek single, dynamic CORS configuration
app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    methods: ["POST", "GET", "OPTIONS"],
    credentials: true
}));

app.use(express.json());

// Nodemailer Transporter Configuration (Using Gmail)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Test API Route
app.get('/', (req, res) => {
    res.send('Portfolio Backend Server is Running! 🚀');
});

// Contact Form API Route
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Form Validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please fill all fields!' });
    }

    // Email content mapping
    const mailOptions = {
        from: email,
        to: process.env.RECEIVER_EMAIL,
        subject: `New Portfolio Message from ${name}`,
        text: `You have received a new message from your portfolio contact form.\n\n` +
              `Name: ${name}\n` +
              `Email: ${email}\n\n` +
              `Message:\n${message}`
    };

    // Sending Email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ success: false, message: 'Server error, please try again later.' });
        }
        console.log('Email sent successfully:', info.response);
        res.status(200).json({ success: true, message: 'Message transmitted successfully! 🚀' });
    });
});

// Server.js ke bilkul niche listen wale part ko is tarah export kar dein:
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app; // 👈 Yeh line likhna Vercel ke liye zaroori hai!