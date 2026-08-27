// =========================================================
// ADMIN ROUTES
// =========================================================

const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("../config/database");

// =========================================================
// POST /api/admin/login
// Admin login
// =========================================================

router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    // =======================================================
    // VALIDATE INPUT
    // =======================================================

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    // =======================================================
    // FIND ADMIN
    // =======================================================

    const [admins] = await db.execute(
      `
      SELECT id, email, password
      FROM admins
      WHERE email = ?
      `,
      [email]
    );

    // =======================================================
    // CHECK ADMIN EXISTS
    // =======================================================

    if (admins.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const admin = admins[0];

    // =======================================================
    // CHECK PASSWORD
    // =======================================================

    const passwordMatch = await bcrypt.compare(
      password,
      admin.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // =======================================================
    // CREATE JWT TOKEN
    // =======================================================

    const token = jwt.sign(
      {
        id: admin.id,
        email: admin.email,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "2h",
      }
    );

    // =======================================================
    // LOGIN SUCCESS
    // =======================================================

    res.status(200).json({
      success: true,
      message: "Login successful.",
      token: token,
      admin: {
        id: admin.id,
        email: admin.email,
      },
    });

  } catch (error) {

    // =======================================================
    // ERROR HANDLING
    // =======================================================

    console.error("Admin login error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong during login.",
    });
  }
});

// =========================================================
// EXPORT ROUTER
// =========================================================

module.exports = router;