import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p className="intro">
        Have questions about our products or your order? We’d love to hear from you!
      </p>

      <div className="contact-info">
        <div className="info-box">
          <h3>📍 Address</h3>
          <p>ProductStore HQ</p>
          <p>123 Market Street, Surat, India</p>
        </div>

        <div className="info-box">
          <h3>📞 Phone</h3>
          <p>[+91 98765 43210](tel:+919876543210)</p>
        </div>

        <div className="info-box">
          <h3>📧 Email</h3>
          <p>support@productstore.com</p>
        </div>
      </div>

      <form className="contact-form">
        <label>Name</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Message</label>
        <textarea placeholder="Write your message here..." rows="5" required />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
