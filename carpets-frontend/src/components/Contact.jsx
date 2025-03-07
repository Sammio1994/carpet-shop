const Contact = () => (
    <div>
        <h2>Contact Us</h2>
        <p>Email: info@carpetshop.com</p>
        <p>Phone: +44 123 456 789</p>
    </div>
);
const ContactPage = () => (
    <div>
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );

<Route path="/contact" element={<Contact />} />

export default Contact;