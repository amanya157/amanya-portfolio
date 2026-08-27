import { useState } from "react";
import "./AIAssistant.css";

function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! I'm Amanya's AI Assistant. Ask me anything!",
    },
  ]);

  // =========================================================
  // SEND MESSAGE TO AI BACKEND
  // =========================================================

  const sendMessage = async (event) => {
    event.preventDefault();

    // Don't send empty messages
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();

    // Add user's message to the chat
    setMessages((previous) => [
      ...previous,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    // Clear the input field
    setInput("");

    // Show loading state
    setIsLoading(true);

    try {
      // =======================================================
      // SEND QUESTION TO BACKEND
      // =======================================================

      const response = await fetch("http://localhost:7001/api/ai", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

       body: JSON.stringify({
  message: userMessage,
  history: messages,
}),
      });

      // Convert backend response to JSON
      const data = await response.json();

      // =======================================================
      // CHECK IF REQUEST WAS SUCCESSFUL
      // =======================================================

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "The AI request failed."
        );
      }

      // =======================================================
      // ADD AI RESPONSE TO CHAT
      // =======================================================

      setMessages((previous) => [
        ...previous,
        {
          sender: "ai",
          text: data.reply,
        },
      ]);

    } catch (error) {
      // =======================================================
      // HANDLE AI ERROR
      // =======================================================

      console.error("AI Assistant error:", error);

      setMessages((previous) => [
        ...previous,
        {
          sender: "ai",
          text:
            "Sorry, I couldn't connect to the AI right now. Please try again.",
        },
      ]);

    } finally {
      // Stop loading
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* =====================================================
          FLOATING AI BUTTON
      ===================================================== */}

      {!isOpen && (
        <button
          className="ai-floating-button"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Assistant"
        >
          <span className="ai-icon">AI</span>
          <span className="ai-pulse"></span>
        </button>
      )}

      {/* =====================================================
          CHAT WINDOW
      ===================================================== */}

      {isOpen && (
        <div className="ai-chat-box">

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="ai-chat-header">

            <div className="ai-header-info">

              <div className="ai-small-icon">
                AI
              </div>

              <div>
                <h3>AI Assistant</h3>
                <p>Amanya's portfolio assistant</p>
              </div>

            </div>

            {/* Close button */}

            <button
              className="ai-close-button"
              onClick={() => setIsOpen(false)}
              aria-label="Close AI Assistant"
            >
              ×
            </button>

          </div>

          {/* =================================================
              CHAT MESSAGES
          ================================================= */}

          <div className="ai-chat-messages">

            {messages.map((message, index) => (
              <div
                key={index}
                className={`ai-message ${message.sender}`}
              >
                {message.text}
              </div>
            ))}

            {/* =================================================
                AI LOADING MESSAGE
            ================================================= */}

            {isLoading && (
              <div className="ai-message ai">
                Thinking...
              </div>
            )}

          </div>

          {/* =================================================
              MESSAGE INPUT
          ================================================= */}

          <form
            className="ai-chat-input"
            onSubmit={sendMessage}
          >

            <input
              type="text"
              placeholder="Ask anything..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
              disabled={isLoading}
            />

            <button
              type="submit"
              disabled={isLoading}
              aria-label="Send message"
            >
              ↑
            </button>

          </form>

        </div>
      )}
    </>
  );
}

export default AIAssistant;