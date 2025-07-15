import "./ContactUs.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";

const ContactUs = () => {
  const { isAuthenticated } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    console.log(data);
    await axios
      .post("https://ybm-nursing-site.onrender.com/api/v1/register", data, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contacts</h1>
        <p className="breadcrumb">
          <a href="/">Home</a> &nbsp;&gt;&nbsp; <span>Contacts</span>
        </p>
      </section>

      {/* Contact Details */}
      <section className="contact-details">
        <div className="detail-item">
          <FaMapMarkerAlt className="detail-icon" />
          <h3>Location</h3>
          <p>
            29 Nicolas str, New York,
            <br />
            987597-50
          </p>
        </div>
        <div className="detail-item">
          <FaPhoneAlt className="detail-icon" />
          <h3>Phones</h3>
          <p>
            0(800) 890-90-609
            <br />
            0(800) 890-90-620
          </p>
        </div>
        <div className="detail-item">
          <FaEnvelope className="detail-icon" />
          <h3>Email</h3>
          <p>
            sale@like-themes.com
            <br />
            tech@like-themes.com
          </p>
        </div>
        <div className="detail-item">
          <FaClock className="detail-icon" />
          <h3>Working Hours</h3>
          <p>
            Wednesday - Sunday
            <br />
            7:00 AM - 5:00 PM
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="map-container">
        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?q=New+York&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Send Message</h2>
        <p>
          Fill out this form and our specialists will contact you shortly for
          detailed consultation.
        </p>
        <form
          className="contact-form"
          onSubmit={handleSubmit((data) => handleRegister(data))}
        >
          <div className="input-group">
            <input
              type="text"
              placeholder="Your name"
              required
              {...register("name")}
            />
            <input
              type="email"
              placeholder="Your email"
              required
              {...register("email")}
            />
          </div>
          <textarea
            placeholder="Message"
            required
            {...register("message")}
          ></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
