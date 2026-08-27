// =========================================================
// EMAIL CONFIGURATION
// =========================================================

const nodemailer = require("nodemailer");

// =========================================================
// CREATE EMAIL TRANSPORTER
// =========================================================

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// =========================================================
// EXPORT TRANSPORTER
// =========================================================

module.exports = transporter;