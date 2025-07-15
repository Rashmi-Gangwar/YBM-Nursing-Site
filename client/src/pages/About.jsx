import React from "react";
import "./About.css";
import PrincipalImg from "./images/principal.png";
import CampusImg from "./images/campus-img.png";
import { useNavigate } from "react-router-dom";
import {
  FaHospitalUser,
  FaMicroscope,
  FaUserMd,
  FaSchool,
} from "react-icons/fa";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Our College</h1>
        <p className="breadcrumb">
          <a href="/">Home</a> &gt; About
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To empower students with ethical values, knowledge, and skills in
            nursing and healthcare to serve communities with compassion and
            dedication.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To be a nationally recognized center of excellence in nursing
            education, research, and service.
          </p>
        </div>
      </section>

      {/* College Overview */}
      <section className="overview">
        <div className="overview-img">
          <img src={ CampusImg } alt="campus-img" />
          </div>
        <div className="overview-text">
          <h2>About YBM Nursing College</h2>
          <p>
            Established in 2005, YBM Nursing College is committed to nurturing
            competent healthcare professionals through comprehensive training,
            hands-on experience, and a focus on human values.
            <br />
            <br />
            Our college is affiliated with a reputed university and approved by
            the Indian Nursing Council. With modern labs, dedicated staff, and
            strategic hospital partnerships, we ensure our students are fully
            prepared for real-world challenges.
          </p>
        </div>
      </section>

      {/* Facilities */}
      <section className="facilities">
        <h2>Our Facilities</h2>
        <div className="facility-grid">
          <div className="facility-item">
            <FaHospitalUser className="facility-icon" />
            <h4>Clinical Training</h4>
            <p>
              Hands-on clinical exposure in top hospitals & simulation labs.
            </p>
          </div>
          <div className="facility-item">
            <FaMicroscope className="facility-icon" />
            <h4>Laboratories</h4>
            <p>Modern anatomy, nursing foundation, and community labs.</p>
          </div>
          <div className="facility-item">
            <FaUserMd className="facility-icon" />
            <h4>Experienced Faculty</h4>
            <p>Dedicated and qualified teachers with real-world experience.</p>
          </div>
          <div className="facility-item">
            <FaSchool className="facility-icon" />
            <h4>Smart Classrooms</h4>
            <p>
              Digitally equipped classrooms with interactive learning tools.
            </p>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="principal-msg">
        <img src={PrincipalImg} alt="Principal" className="principal-img" />
        <div className="principal-text">
          <h2>Principal's Message</h2>
          <p>
            “At YBM Nursing College, we believe in fostering not only academic
            excellence but also personal growth and ethical responsibility. Our
            commitment is to produce healthcare professionals who are
            compassionate, competent, and confident in their roles.”
            <br />
            <br />
            <strong>– Dr. Neha Verma, Principal</strong>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Want to Join Sunrise Nursing College?</h2>
        <button className="cta-btn" onClick={() => navigate("/apply-now")}>
          Apply Now
        </button>
      </section>
    </div>
  );
};

export default About;
