import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./pages/Hero";
import About from "./pages/About";
import HostelLife from "./pages/HostelLife";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";

import ApplyNow from "./pages/ApplyNow";
import ReadMore from "./pages/ReadMore";

const App = () => {
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
          <Route path="/read-more" element={<ReadMore />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
