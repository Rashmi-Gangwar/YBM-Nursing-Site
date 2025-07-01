import React, { useState } from "react";
import "./ApplyNow.css";

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
    // Here you can integrate with backend or email service
  };

  return (
    <div className="apply-now-page">
      {/* Hero */}
      <section className="apply-hero">
        <h1>Apply Now</h1>
        <p className="breadcrumb"><a href="/">Home</a> &gt; Apply Now</p>
      </section>

      {/* Form Section */}
      <section className="application-form-section">
        <div className="form-container">
          <h2>Application Form</h2>
          <form onSubmit={handleSubmit} className="application-form">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
            />
            <select name="course" required onChange={handleChange}>
              <option value="">Select Course</option>
              <option value="B.Sc Nursing">B.Sc Nursing</option>
              <option value="G.N.M">G.N.M</option>
              <option value="A.N.M">A.N.M</option>
              <option value="Post Basic B.Sc">Post Basic B.Sc</option>
            </select>
            <textarea
              name="message"
              rows="4"
              placeholder="Why do you want to join our college?"
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="submit-btn">Submit Application</button>
          </form>
        </div>

        {/* Instructions */}
        <div className="form-info">
          <h3>Instructions:</h3>
          <ul>
            <li>Ensure all fields are filled correctly.</li>
            <li>Use an active email and mobile number.</li>
            <li>You will be contacted for further process after review.</li>
            <li>Check your inbox for confirmation.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ApplyNow;
