// =========================================================
// AMANYA GODFREY PORTFOLIO BACKEND
// =========================================================

// Load environment variables
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// =========================================================
// IMPORT ROUTES
// =========================================================

const contactRoutes = require("./routes/contact");
const aiRoutes = require("./routes/ai");
const adminRoutes = require("./routes/admin");

// =========================================================
// CREATE EXPRESS APPLICATION
// =========================================================

const app = express();

// =========================================================
// SECURITY
// =========================================================

app.use(helmet());

// =========================================================
// CORS
// =========================================================

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "https://amanya-portfolio.vercel.app",
      "https://amanya-portfolio-4224iwvxj-amanya-godfreys-projects.vercel.app",
    ],
  })
);

// =========================================================
// RATE LIMITING
// =========================================================

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,

  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

app.use(limiter);

// =========================================================
// BODY PARSER
// =========================================================

app.use(express.json());

// =========================================================
// BASIC ROUTE
// =========================================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Amanya Godfrey Portfolio API is running.",
  });
});

// =========================================================
// CONTACT ROUTES
// =========================================================

app.use("/api/contact", contactRoutes);

// =========================================================
// AI ROUTES
// =========================================================

app.use("/api/ai", aiRoutes);

// =========================================================
// ADMIN ROUTES
// =========================================================

app.use("/api/admin", adminRoutes);

// =========================================================
// 404 HANDLER
// IMPORTANT: THIS MUST COME AFTER ALL ROUTES
// =========================================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found.",
  });
});

// =========================================================
// START SERVER
// =========================================================

const PORT = process.env.PORT || 7001;

app.listen(PORT, () => {
  console.log(
    `Portfolio backend running on http://localhost:${PORT}`
  );
});