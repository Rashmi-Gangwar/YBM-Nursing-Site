import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./pages/Hero";
import About from "./pages/About";
import HostelLife from "./pages/HostelLife";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";

import ApplyNow from "./pages/ApplyNow";

import OtpVerification from "./pages/OtpVerification";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import ReadMore from "./pages/ReadMore";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "./main";

import AdminPage from "./pages/AdminPage";

const App = () => {
  const { setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const getUser = async () => {
      await axios
        .get("http://localhost:4000/api/v1/user/me", { withCredentials: true })
        .then((res) => {
          setUser(res.data.user);
          setIsAuthenticated(true);
        })
        .catch((err) => {
          setUser(null);
          setIsAuthenticated(false);
        });
    };
    getUser();
  }, []);

  return (
    <div>
      <Header />
      <main style={{ marginTop: "100px", marginBottom: "0" }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/hostel-life" element={<HostelLife />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route path="/apply-now" element={<ApplyNow />} />
          <Route
            path="/otp-verification/:email/:phone"
            element={<OtpVerification />}
          />
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />

          <Route path="/read-more" element={<ReadMore />} />

          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
      <ToastContainer theme="colored" />
      <Footer />
    </div>
  );
};

export default App;
