import React from "react";
import "./ReadMore.css";
import Gallery1 from "../assets/apartments.png";
import Gallery2 from "./images/campus-img.png";
import Gallery3 from "../assets/care-img.png";
import Gallery4 from "../assets/apartments.png";
import { useNavigate } from "react-router-dom";

const ReadMore = () => {
  const navigate = useNavigate();

  return (
    <div className="readmore-page">
      {/* Hero */}
      <section className="readmore-hero">
        <div className="centered-container">
          <h1>Discover More About YBM Nursing College</h1>
          <p className="breadcrumb">
            <a href="/">Home</a> &gt; Read More
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="centered-container">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✔️ 100% internship and clinical exposure in top hospitals</li>
            <li>✔️ Experienced and caring faculty members</li>
            <li>✔️ Fully equipped labs and simulation rooms</li>
            <li>✔️ Secure campus with separate hostels</li>
            <li>✔️ Regular workshops, seminars, and skill-building sessions</li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="centered-container">
          <h2>What Our Students Say</h2>
          <div className="testimonial-cards">
            <div className="testimonial">
              <p>
                “The teachers here are supportive and the hospital tie-ups
                helped me gain confidence before graduation.”
              </p>
              <span>– Priya Sharma, GNM 2023</span>
            </div>
            <div className="testimonial">
              <p>
                “I got placed in a reputed hospital right after completing B.Sc
                Nursing. Truly life-changing!”
              </p>
              <span>– Arjun Singh, B.Sc 2022</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Tie-Ups */}
      <section className="tieups">
        <div className="centered-container">
          <h2>Our Hospital Affiliations</h2>
          <ul>
            <li>🏥 Fortis Healthcare</li>
            <li>🏥 Apollo Hospitals</li>
            <li>🏥 Max Super Specialty</li>
            <li>🏥 Local Government Hospitals</li>
          </ul>
        </div>
      </section>

      {/* Career Support */}
      <section className="career-support">
        <div className="centered-container">
          <h2>Career & Placement Support</h2>
          <p>
            Our placement cell actively collaborates with hospitals and
            healthcare recruiters to guide students into secure and rewarding
            roles in nursing, teaching, and administration.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <div className="centered-container">
          <h2>Campus Life Gallery</h2>
          <div className="gallery-grid">
            <img src={Gallery1} alt="Gallery 1" />
            <img src={Gallery2} alt="Gallery 2" />
            <img src={Gallery3} alt="Gallery 3" />
            <img src={Gallery4} alt="Gallery 4" />
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="announcements">
        <div className="centered-container">
          <h2>Latest Announcements</h2>
          <ul>
            <li>📌 Admissions for GNM/B.Sc 2025 batch are now open.</li>
            <li>📌 Annual Health Camp on July 15, 2025.</li>
            <li>📌 Blood Donation Drive coming soon.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="quick-cta">
        <div className="centered-container">
          <h3>Need Help or Have Questions?</h3>
          <button className="cta-btn" onClick={() => navigate("/contact")}>
            Contact Us Now →
          </button>
        </div>
      </section>
    </div>
  );
};

export default ReadMore;
