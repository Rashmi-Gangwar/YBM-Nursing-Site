import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaEnvelope } from "react-icons/fa";
import "./Header.css";
import logo from "../assets/react.svg";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="top-header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="school-logo" />
          <div className="school-name">
            <h2>YBM</h2>
            <p>Nursing College</p>
          </div>
        </div>

        <div className="top-right">
          <div className="social-icons nav-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaEnvelope />
          </div>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
        </div>
      </div>

      <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About Us</li>
          <li onClick={() => navigate("/hostel-life")}>Hostel Life</li>
          <li onClick={() => navigate("/blog")}>Blog</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
