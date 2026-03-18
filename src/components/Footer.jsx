const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="Logo1.png" alt="" />
          <a href="mailto:support@finech.com" target="_blank">
            support@finech.com
          </a>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <a>About Us</a>
          <a>Careers</a>
          <a>Press</a>
          <a>Blog</a>
        </div>

        <div className="footer-links">
          <h4>Products</h4>
          <a>Payments</a>
          <a>API & Developer Docs</a>
          <a>Pricing</a>
          <a>Security</a>
        </div>

        <div className="footer-links">
          <h4>Resources</h4>
          <a>Help Center</a>
          <a>FAQs</a>
          <a>Case Studies</a>
          <a>Webinars</a>
        </div>

        <div className="footer-links">
          <h4>Legal</h4>
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
          <a>Compliance</a>
          <a>Security & Trust</a>
        </div>

        <div className="footer-links">
          <h4>Contact</h4>
          <a>Support</a>
          <a>Partnerships</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Finech. All Rights Reserved.</p>

        <div className="auth-links">
          <a>Login</a>
          <a>Sign Up</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
