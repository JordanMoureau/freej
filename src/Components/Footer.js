import "./footer.css";

import final from "../Media/final.jpg";
import logo from "../Media/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p className="footer-text">
          © {new Date().getFullYear()} FreeJ. All rights reserved.
        </p>
      </div>
      <div className="footer-right">
        <p>Check me out on Social:</p>
        <div className="footer-socials">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
