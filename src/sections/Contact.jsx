
import { useState } from "react";
import "./Contact.css";

function Contact() {
  // Form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Submission states
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // =========================================================
  // HANDLE INPUT CHANGES
  // =========================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // =========================================================
  // SUBMIT CONTACT FORM
  // =========================================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://amanya-portfolio-backend.onrender.com/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to send message."
        );
      }

      // =======================================================
      // SUCCESSFUL SUBMISSION
      // =======================================================

      setStatus("success");

      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {

      console.error(
        "Contact form error:",
        error
      );

      setStatus("error");

    } finally {

      setIsSubmitting(false);

    }
  };

  return (
    <section
      className="contact-section"
      id="contact"
    >

      <div className="contact-container">

        {/* =================================================
            SECTION HEADING
        ================================================== */}

        <div className="section-heading contact-heading">

          <p className="section-label">
            GET IN TOUCH
          </p>

          <h2>
            Let's <span>Work Together</span>
          </h2>

          <p className="contact-intro">
            Have a project, idea or opportunity you'd like to
            discuss? Send me a message and I'll get back to you.
          </p>

        </div>


        {/* =================================================
            CONTACT FORM
        ================================================== */}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          {/* Name */}

          <div className="form-group">

            <label htmlFor="name">
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />

          </div>


          {/* Email */}

          <div className="form-group">

            <label htmlFor="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />

          </div>


          {/* Subject */}

          <div className="form-group">

            <label htmlFor="subject">
              Subject
            </label>

            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What would you like to discuss?"
            />

          </div>


          {/* Message */}

          <div className="form-group">

            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="6"
              required
            />

          </div>


          {/* =================================================
              SUBMIT BUTTON
          ================================================== */}

          <button
            type="submit"
            className="contact-submit"
            disabled={isSubmitting}
          >

            {isSubmitting
              ? "Sending..."
              : "Send Message"}

          </button>


          {/* =================================================
              SUCCESS MESSAGE
          ================================================== */}

          {status === "success" && (
            <p className="form-success">
              Your message has been sent successfully.
            </p>
          )}


          {/* =================================================
              ERROR MESSAGE
          ================================================== */}

          {status === "error" && (
            <p className="form-error">
              Something went wrong. Please try again.
            </p>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;

