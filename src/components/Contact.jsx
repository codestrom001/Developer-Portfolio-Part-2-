import { useState, useEffect } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ✅ LOAD saved data on refresh
  useEffect(() => {
    const saved = localStorage.getItem("contactForm");
    if (saved) {
      setForm(JSON.parse(saved));
    }
  }, []);

  // 💾 AUTO SAVE on every change
  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(form));
  }, [form]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("All fields are required");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Message sent successfully!");

    localStorage.removeItem("contactForm"); // clear saved data
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      {/* 💡 hint if saved data exists */}
      {localStorage.getItem("contactForm") && (
        <p style={{ color: "#06b6d4" }}>
          You have unsent message data saved 💾
        </p>
      )}

      <form onSubmit={handleSubmit} className="contact-form">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
        />

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;