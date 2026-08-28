// =========================================================
// CONTACT ROUTES
// =========================================================

const express = require("express");
const router = express.Router();

const db = require("../config/database");
const resend = require("../config/email");

// Admin authentication middleware
const authenticateAdmin = require("../middleware/auth");

// =========================================================
// POST /api/contact
// Save a contact form message and send email notification
// PUBLIC ROUTE
// =========================================================

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      message,
    } = req.body;

    // =======================================================
    // VALIDATE REQUIRED FIELDS
    // =======================================================

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    // =======================================================
    // INSERT MESSAGE INTO DATABASE
    // =======================================================

    const [result] = await db.execute(
      `
      INSERT INTO contact_messages
      (name, email, subject, message)
      VALUES (?, ?, ?, ?)
      `,
      [
        name,
        email,
        subject || null,
        message,
      ]
    );

    // =======================================================
    // SEND EMAIL NOTIFICATION WITH RESEND
    // =======================================================

    const { data, error } = await resend.emails.send({
      from: "Amanya Godfrey Portfolio <onboarding@resend.dev>",
      to: [process.env.EMAIL_TO],

      subject: `New Portfolio Message: ${
        subject || "No Subject"
      }`,

      text: `
You have received a new message through your portfolio.

Name: ${name}
Email: ${email}
Subject: ${subject || "No Subject"}

Message:
${message}

Database Message ID: ${result.insertId}
      `,
    });

    // =======================================================
    // CHECK RESEND ERROR
    // =======================================================

    if (error) {
      console.error("Resend email error:", error);

      return res.status(500).json({
        success: false,
        message:
          "Message was saved, but the email notification could not be sent.",
        id: result.insertId,
      });
    }

    // =======================================================
    // SUCCESS RESPONSE
    // =======================================================

    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully.",
      id: result.insertId,
      emailId: data?.id,
    });

  } catch (error) {

    // =======================================================
    // ERROR HANDLING
    // =======================================================

    console.error("Contact form error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while sending your message.",
    });
  }
});

// =========================================================
// GET /api/contact
// Get all contact messages
// PROTECTED ADMIN ROUTE
// =========================================================

router.get(
  "/",
  authenticateAdmin,
  async (req, res) => {

    try {

      const [messages] = await db.execute(
        `
        SELECT
          id,
          name,
          email,
          subject,
          message,
          created_at
        FROM contact_messages
        ORDER BY created_at DESC
        `
      );

      // =====================================================
      // SEND MESSAGES TO ADMIN
      // =====================================================

      res.status(200).json({
        success: true,
        messages: messages,
      });

    } catch (error) {

      console.error(
        "Error fetching contact messages:",
        error
      );

      res.status(500).json({
        success: false,
        message: "Failed to fetch contact messages.",
      });
    }
  }
);

// =========================================================
// EXPORT ROUTER
// =========================================================

module.exports = router;