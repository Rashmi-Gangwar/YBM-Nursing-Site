import React from "react";
import "./Hero.css";
import AboutImg from "./images/about.png";
import { useNavigate } from "react-router-dom";
import {
  FaGraduationCap,
  FaUserNurse,
  FaBookOpen,
  FaHeartbeat,
  FaMicroscope,
  FaStethoscope,
} from "react-icons/fa";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to YBM Nursing College</h1>
          <p>
            Empowering the future of healthcare with compassion and excellence.
          </p>
          <button className="hero-btn">Explore Courses</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <img
            src={AboutImg}
            alt="About YBM Nursing College"
            className="about-img"
          />
          <div>
            <h2>About Us</h2>
            <p>
              YBM Nursing College is a premier institution dedicated to
              educating compassionate, skilled, and professional nurses.
              Established with the vision to serve society through quality
              healthcare education, our campus offers a nurturing environment
              with advanced laboratories, experienced faculty, and strong
              industry partnerships.
            </p>
            <p>
              We emphasize hands-on clinical experience, critical thinking, and
              ethical practice. Our graduates are not only academically strong
              but also equipped with the human values and leadership skills
              required in real-world hospital environments.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses">
        <h2>Our Courses</h2>
        <div className="course-grid">
          <div className="course-card">
            <FaUserNurse className="icon" />
            <h3>General Nursing & Midwifery (GNM)</h3>
            <p>
              Comprehensive 3-year diploma program focused on clinical practice.
            </p>
          </div>
          <div className="course-card">
            <FaGraduationCap className="icon" />
            <h3>B.Sc Nursing</h3>
            <p>
              4-year undergraduate course to build strong foundations in
              nursing.
            </p>
          </div>
          <div className="course-card">
            <FaBookOpen className="icon" />
            <h3>Post Basic B.Sc Nursing</h3>
            <p>Upgrade your GNM diploma to a recognized degree.</p>
          </div>
          <div className="course-card">
            <FaMicroscope className="icon" />
            <h3>Diploma in Medical Laboratory Technology</h3>
            <p>2-year program for careers in diagnostic laboratories.</p>
          </div>
          <div className="course-card">
            <FaStethoscope className="icon" />
            <h3>Community Health Nursing</h3>
            <p>
              Focused on primary care and rural/urban public health delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <FaHeartbeat className="icon" />
            <h4>Experienced Faculty</h4>
            <p>Learn from certified, experienced professionals.</p>
          </div>
          <div className="feature-item">
            <FaBookOpen className="icon" />
            <h4>Modern Labs</h4>
            <p>Advanced simulation labs and clinical practice rooms.</p>
          </div>
          <div className="feature-item">
            <FaGraduationCap className="icon" />
            <h4>Placement Support</h4>
            <p>100% placement assistance with top hospitals and clinics.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Join YBM Nursing College?</h2>
        <p>Applications are open now for the 2025 session.</p>
        <button className="cta-btn" onClick={() => navigate("/apply-now")}>
          Apply Now
        </button>
      </section>
    </div>
  );
};

export default Hero;
