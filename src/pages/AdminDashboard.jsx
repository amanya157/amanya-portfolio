// =========================================================
// ADMIN DASHBOARD
// =========================================================

import { useEffect, useState } from "react";
import "./AdminDashboard.css";

import logo from "../assets/logo.png";

function AdminDashboard() {

  // =======================================================
  // STATE
  // =======================================================

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // =======================================================
  // LOAD MESSAGES
  // =======================================================

  useEffect(() => {

    const fetchMessages = async () => {

      try {

        const token =
          localStorage.getItem("adminToken");

        // =================================================
        // CHECK TOKEN
        // =================================================

        if (!token) {

          window.location.href = "/admin";

          return;
        }

        // =================================================
        // REQUEST MESSAGES
        // =================================================

        const response = await fetch(
          "https://amanya-portfolio-backend.onrender.com/api/contact",
          {
            method: "GET",

            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        // =================================================
        // TOKEN INVALID / EXPIRED
        // =================================================

        if (response.status === 401) {

          localStorage.removeItem("adminToken");
          localStorage.removeItem("adminUser");

          window.location.href = "/admin";

          return;
        }

        // =================================================
        // OTHER ERROR
        // =================================================

        if (!response.ok) {

          throw new Error(
            data.message ||
            "Failed to load messages."
          );

        }

        // =================================================
        // SAVE MESSAGES
        // =================================================

        setMessages(
          data.messages || []
        );

      } catch (error) {

        console.error(
          "Dashboard error:",
          error
        );

        setError(
          error.message ||
          "Failed to load messages."
        );

      } finally {

        setLoading(false);

      }

    };

    fetchMessages();

  }, []);

  // =======================================================
  // LOGOUT
  // =======================================================

  const handleLogout = () => {

    localStorage.removeItem("adminToken");

    localStorage.removeItem("adminUser");

    window.location.href = "/admin";

  };

  // =======================================================
  // ADMIN INFORMATION
  // =======================================================

  const adminUser =
    JSON.parse(
      localStorage.getItem(
        "adminUser"
      ) || "{}"
    );

  // =======================================================
  // DASHBOARD
  // =======================================================

  return (

    <main className="dashboard-page">

      {/* =================================================
          SIDEBAR
      ================================================== */}

      <aside className="dashboard-sidebar">

        <div className="dashboard-brand">

          <img
            src={logo}
            alt="Amanya Godfrey"
          />

          <div>

            <strong>
              Amanya Godfrey
            </strong>

            <span>
              Admin
            </span>

          </div>

        </div>

        <nav className="dashboard-nav">

          <a href="/admin/dashboard">
            Dashboard
          </a>

          <a href="#messages">
            Messages
          </a>

          <a href="/">
            View Portfolio
          </a>

        </nav>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>

      </aside>

      {/* =================================================
          MAIN CONTENT
      ================================================== */}

      <section className="dashboard-content">

        {/* Header */}

        <header className="dashboard-header">

          <div>

            <p className="dashboard-label">
              ADMINISTRATION
            </p>

            <h1>
              Dashboard
            </h1>

          </div>

          <div className="admin-account">

            <span>
              {adminUser.email ||
                "Administrator"}
            </span>

          </div>

        </header>

        {/* =================================================
            STATISTICS
        ================================================== */}

        <section className="dashboard-stats">

          <div className="stat-card">

            <span>
              Total Messages
            </span>

            <strong>
              {messages.length}
            </strong>

          </div>

          <div className="stat-card">

            <span>
              New Messages
            </span>

            <strong>
              {messages.length}
            </strong>

          </div>

          <div className="stat-card">

            <span>
              System Status
            </span>

            <strong>
              Online
            </strong>

          </div>

        </section>

        {/* =================================================
            MESSAGES
        ================================================== */}

        <section
          className="messages-section"
          id="messages"
        >

          <div className="section-heading">

            <div>

              <p className="dashboard-label">
                INBOX
              </p>

              <h2>
                Contact Messages
              </h2>

            </div>

            <span>
              {messages.length} messages
            </span>

          </div>

          {/* Loading */}

          {loading && (

            <div className="dashboard-message">
              Loading messages...
            </div>

          )}

          {/* Error */}

          {!loading && error && (

            <div className="dashboard-message error">
              {error}
            </div>

          )}

          {/* Empty */}

          {!loading &&
            !error &&
            messages.length === 0 && (

              <div className="dashboard-message">
                No contact messages yet.
              </div>

            )}

          {/* Messages */}

          {!loading &&
            !error &&
            messages.length > 0 && (

              <div className="messages-list">

                {messages.map((message) => (

                  <article
                    className="message-card"
                    key={message.id}
                  >

                    <div className="message-top">

                      <div>

                        <h3>
                          {message.name}
                        </h3>

                        <a
                          href={`mailto:${message.email}`}
                        >
                          {message.email}
                        </a>

                      </div>

                      <time>
                        {new Date(
                          message.created_at
                        ).toLocaleString()}
                      </time>

                    </div>

                    <div className="message-subject">

                      <strong>
                        Subject:
                      </strong>

                      {message.subject ||
                        "No Subject"}

                    </div>

                    <p className="message-text">
                      {message.message}
                    </p>

                  </article>

                ))}

              </div>

            )}

        </section>

      </section>

    </main>

  );
}

export default AdminDashboard;