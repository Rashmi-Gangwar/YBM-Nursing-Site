import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./ApplyNow.css";

const ApplyNow = () => {
  const { isAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    console.log(data);
    data.phone = `+91${data.phone}`;
    await axios
      .post("https://ybm-nursing-site.onrender.com/api/v1/register", data, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        toast.success(res.data.message);
        navigateTo(`/otp-verification/${data.email}/${data.phone}`);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="apply-now-page">
      {/* Hero */}
      <section className="apply-hero">
        <h1>Apply Now</h1>
        <p className="breadcrumb">
          <a href="/">Home</a> &gt; Apply Now
        </p>
      </section>

      {/* Form Section */}
      <section className="application-form-section">
        <div className="form-container">
          <h2>Application Form</h2>
          <form
            onSubmit={handleSubmit((data) => handleRegister(data))}
            className="application-form"
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              {...register("name")}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              {...register("email")}
            />
            <div className="phone-input-wrapper">
              <span className="phone-prefix">+91</span>
              <input
                type="tel"
                placeholder="Phone Number"
                required
                {...register("phone")}
              />
            </div>

            <input
              type="password"
              placeholder="Password"
              required
              {...register("password")}
            />
            <div className="verification-method">
              <p>Select Verification Method</p>
              <div className="wrapper">
                <label>
                  <input
                    type="radio"
                    name="verificationMethod"
                    value={"email"}
                    {...register("verificationMethod")}
                    required
                  />
                  Email
                </label>
              </div>
            </div>
            <select name="course" required {...register("course")}>
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
              {...register("message")}
            ></textarea>
            <button type="submit" className="submit-btn">
              Submit Application
            </button>
          </form>
        </div>

        {/* Instructions */}
        <div className="form-info">
          <h3>Instructions:</h3>
          <ul>
            <li>Ensure all fields are filled correctly.</li>
            <li>Use an active email and mobile number.</li>
            <li>Verification of the email is required.</li>
            <li>You will be contacted for further process after review.</li>
            <li>Check your inbox for confirmation.</li>
            <li>
              Our Team will contact with you after the Registration process.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ApplyNow;
