import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-col">
          <h3 className="footer-logo">SALOK</h3>
          <p>
            Salok University is dedicated to providing quality education,
            industry-ready skills, and career-focused learning for students.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Courses</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Courses</h4>
          <ul>
            <li>Web Development</li>
            <li>Data Science</li>
            <li>Cyber Security</li>
            <li>AI & ML</li>
            <li>Cloud Computing</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>Email: info@salokuniversity.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: India</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Salok University. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
