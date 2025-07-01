import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Column 1: Logo & Description */}
        <div className="footer-col">
          <div className="footer-logo">
            <img src="/logo.png" alt="Logo" />
            <div>
              <h2>YBM</h2>
              <span>Nursing College</span>
            </div>
          </div>
          <p>
            Holistic senior care is centered on improving the overall quality of
            life for older adults. This includes preserving and promoting.
          </p>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

        {/* Column 2: Sitemap */}
        <div className="footer-col sitemap">
          <h3>Sitemap</h3>
          <div className="sitemap-links">
            <ul>
              <li onClick={() => navigate("/blog")}>Articles</li>
              <li onClick={() => navigate("/about")}>Products</li>
              <li onClick={() => navigate("/contact")}>FAQ</li>
              <li onClick={() => navigate("/read-more")}>Gallery</li>
            </ul>
            <ul>
              <li onClick={() => navigate("/contact")}>Contacts</li>
              <li onClick={() => navigate("/hostel-life")}>Senior Care</li>
              <li onClick={() => navigate("/about")}>About Us</li>
              <li onClick={() => navigate("/blog")}>Blog</li>
            </ul>
          </div>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-col">
          <h3>Contact info</h3>
          <div className="contact-item">
            <FaMapMarkerAlt />
            <div>
              <strong>Central Office:</strong>
              <p>1353 Locust St, Kansas City, MO 64106</p>
            </div>
          </div>
          <div className="contact-item">
            <FaPhoneAlt />
            <div>
              <strong>Phones:</strong>
              <p>
                +490-800-856-05-39
                <br />
                +490-800-856-05-49
              </p>
            </div>
          </div>
        </div>

        {/* Column 4: Subscribe */}
        <div className="footer-col">
          <h3>Subscribe</h3>
          <div className="subscribe-box">
            <input type="email" placeholder="Your email ..." />
            <button>
              <FaPaperPlane />
            </button>
          </div>
          <label className="checkbox">
            <input type="checkbox" />I authorize the use of the information
            entered
          </label>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          <span className="highlight">YBM Nursing College</span> © All Rights
          Reserved - 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
