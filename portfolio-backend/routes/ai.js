// =========================================================
// AI ROUTES - GEMINI
// =========================================================

const express = require("express");
const router = express.Router();

const { GoogleGenerativeAI } = require("@google/generative-ai");

// =========================================================
// GEMINI CLIENT
// =========================================================

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// =========================================================
// AMANYA PORTFOLIO AI INSTRUCTIONS
// =========================================================

const portfolioInstructions = `
You are the AI Assistant on the personal portfolio website of Amanya Godfrey.

Your job is to help visitors understand Amanya, his skills, services,
education/training, technologies, and professional work.

IMPORTANT RULES:

1. You can answer GENERAL questions too.
2. You are not limited to questions about Amanya's portfolio.
3. If a visitor asks a general question such as mathematics, science,
   programming, technology, history, or everyday questions, answer it
   normally and helpfully.
4. When a visitor asks about Amanya, use the portfolio information
   provided below.
5. Never invent personal information about Amanya.
6. If you do not know a specific detail about Amanya, say that you
   don't have that information rather than making it up.
7. Be friendly, professional, clear, and natural.
8. Keep answers reasonably concise unless the visitor asks for a
   detailed explanation.
9. Use the conversation history to understand follow-up questions.
10. Remember what the visitor has already asked during the current
    conversation.

PORTFOLIO INFORMATION:

Name:
Amanya Godfrey

Professional role:
Full Stack Developer

Main focus:
Amanya builds modern, responsive websites, web applications,
and digital experiences.

Technologies:
- HTML5
- CSS3
- JavaScript
- React
- Node.js
- Express.js
- MySQL
- Python
- Git
- GitHub
- VS Code

Training:
- KLAB Institute - Frontend development training
- CodeBridge Academy - JavaScript training

Services:
- Website development
- Web application development
- Responsive frontend development
- Backend development
- Database development
- Digital solutions

The website also contains a Contact section where visitors can
send a message to Amanya.

If asked about information that is not included above, do not
invent an answer. Explain that the information is not currently
available to you and direct the visitor to the Contact section
when appropriate.
`;

// =========================================================
// POST /api/ai
// =========================================================

router.post("/", async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    // =======================================================
    // VALIDATE MESSAGE
    // =======================================================

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please enter a question.",
      });
    }

    // =======================================================
    // CREATE GEMINI MODEL
    // =======================================================

    const model = genAI.getGenerativeModel({
      model: "gemini-3.6-flash",
    });

    // =======================================================
    // CLEAN CONVERSATION HISTORY
    // =======================================================

    const conversationHistory = Array.isArray(history)
      ? history
          .filter(
            (item) =>
              item &&
              (item.sender === "user" || item.sender === "ai") &&
              typeof item.text === "string"
          )
          .slice(-20)
      : [];

    // =======================================================
    // BUILD CONVERSATION
    // =======================================================

    const conversation = conversationHistory
      .map((item) => {
        const speaker =
          item.sender === "user" ? "VISITOR" : "AI ASSISTANT";

        return `${speaker}: ${item.text}`;
      })
      .join("\n\n");

    // =======================================================
    // CREATE PROMPT
    // =======================================================

    const prompt = `
${portfolioInstructions}

CURRENT CONVERSATION:

${conversation}

VISITOR'S NEW QUESTION:
${message}

AI ASSISTANT:
`;

    // =======================================================
    // SEND REQUEST TO GEMINI
    // =======================================================

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    // =======================================================
    // SEND RESPONSE TO FRONTEND
    // =======================================================

    res.status(200).json({
      success: true,
      reply: response,
    });

  } catch (error) {
    console.error("Gemini AI error:", error);

    res.status(500).json({
      success: false,
      message: "The AI assistant is currently unavailable.",
    });
  }
});

// =========================================================
// EXPORT ROUTER
// =========================================================

module.exports = router;