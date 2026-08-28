import { useState } from "react";
import "./Admin.css";
import logo from "../assets/logo.png";

function Admin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  // =======================================================
  // ADMIN LOGIN
  // =======================================================

  const handleLogin = async (e) => {

    e.preventDefault();

    setError("");
    setLoading(true);

    try {

      const response = await fetch(
        "https://amanya-portfolio-backend.onrender.com/api/admin/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );


      const data = await response.json();


      if (!response.ok) {

        throw new Error(
          data.message || "Login failed."
        );

      }


      // ===================================================
      // SAVE JWT TOKEN
      // ===================================================

      localStorage.setItem(
        "adminToken",
        data.token
      );


      // ===================================================
      // SAVE ADMIN INFORMATION
      // ===================================================

      localStorage.setItem(
        "adminUser",
        JSON.stringify(data.admin)
      );


      // ===================================================
      // GO TO DASHBOARD
      // ===================================================

      window.location.href = "/admin/dashboard";

    } catch (error) {

      console.error(
        "Admin login error:",
        error
      );

      setError(
        error.message ||
        "Something went wrong."
      );

    } finally {

      setLoading(false);

    }

  };


  return (

    <main className="admin-page">

      <div className="admin-login-container">


        {/* =================================================
            BRAND
        ================================================== */}

        <div className="admin-brand">

          <img
            src={logo}
            alt="Amanya Godfrey"
          />

          <h1>
            Amanya Godfrey
          </h1>

          <p>
            Administrator Portal
          </p>

        </div>


        {/* =================================================
            LOGIN CARD
        ================================================== */}

        <div className="admin-login-card">

          <h2>
            Welcome Back
          </h2>

          <p className="admin-subtitle">
            Sign in to access your portfolio dashboard.
          </p>


          {/* =================================================
              ERROR MESSAGE
          ================================================== */}

          {error && (

            <div className="admin-error">
              {error}
            </div>

          )}


          {/* =================================================
              LOGIN FORM
          ================================================== */}

          <form onSubmit={handleLogin}>


            {/* Email */}

            <div className="admin-field">

              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your admin email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

            </div>


            {/* Password */}

            <div className="admin-field">

              <label htmlFor="password">
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

            </div>


            {/* Login button */}

            <button
              type="submit"
              className="admin-login-button"
              disabled={loading}
            >

              {loading
                ? "Signing in..."
                : "Sign In"}

            </button>

          </form>


          {/* =================================================
              BACK TO PORTFOLIO
          ================================================== */}

          <a
            href="/"
            className="back-to-portfolio"
          >
            ← Back to portfolio
          </a>

        </div>

      </div>

    </main>

  );
}

export default Admin;