import React from "react";
import "./HostelLife.css";
import { useNavigate } from "react-router-dom";

import buildingImg from "../assets/apartments.png";
import img1 from "../assets/1-bedroom-set.png";
import img2 from "../assets/2-bedroom-set.png";
import img3 from "../assets/3-bedroom-set.png";
import careImage from "../assets/care-img.png";
import Emergency from "../assets/Ambulance.png";
import MealImg from "../assets/meal.png";

import {
  FaRegEye,
  FaRegCommentDots,
  FaClock,
  FaBuilding,
  FaHandsHelping,
  FaBriefcaseMedical,
  FaUserNurse,
  FaBed,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FiPhoneCall, FiPhone } from "react-icons/fi";

const features = [
  { icon: <FaBuilding />, label: "Independent Living" },
  { icon: <FaHandsHelping />, label: "Emotional Support" },
  { icon: <FaBriefcaseMedical />, label: "Emergency Medical Help" },
  { icon: <FaUserNurse />, label: "24/7 Nursing Staff" },
  { icon: <FaBed />, label: "Comfortable Rooms" },
  { icon: <FaUmbrellaBeach />, label: "Relaxing Atmosphere" },
];

const apartments = [
  {
    img: img1,
    title: "Separate apartments",
    desc: "Personalized Senior Care at Its Best Cherished Comforts Exceptional Senior Care for Every Stage Where Compassion",
  },
  {
    img: img2,
    title: "2 bed apartments",
    desc: "By promoting a mentally active and socially connected lifestyle, holistic care contributes to cognitive well-being.",
  },
  {
    img: img3,
    title: "3 and more bed apartments",
    desc: "Exercise programs designed to enhance strength, flexibility, and mobility are also integral to holistic care.",
  },
];

const meals = [
  {
    time: "07:00 – 08:00",
    title: "Breakfast",
    description:
      "Personalized Senior Care at Its Best Cherished Comforts Exceptional",
  },
  {
    time: "12:00 – 14:00",
    title: "Lunch",
    description:
      "Personalized Senior Care at Its Best Cherished Comforts Exceptional",
  },
  {
    time: "17:00 – 19:00",
    title: "Dinner",
    description:
      "Personalized Senior Care at Its Best Cherished Comforts Exceptional",
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Dawson Timms",
    role: "Nurse",
    // img: "./nurse1.jpg",
    // social: [],
  },
  {
    id: 2,
    name: "Michele Bailey",
    role: "Doctor",
    // img: "./nurse2.jpg",
    // social: [],
  },
  {
    id: 3,
    name: "Philip Klein",
    role: "Nurse",
    // img: "./nurse3.jpg",
    // social: [],
  },
  {
    id: 4,
    name: "Brian Marsh",
    role: "Doctor",
    // // img: "./nurse4.jpg",
    // social: [
    //   { icon: <FaLinkedinIn />, link: "#" },
    //   { icon: <FaTwitter />, link: "#" },
    //   { icon: <FaInstagram />, link: "#" },
    // ],
  },
];

const articles = [
  {
    id: 1,
    // img: "/images/article1.jpg",
    title: "Innovative Wellness Program Enhances Senior Living Experience",
    date: "Oct 14, 2022",
    category: "Emotions",
    views: 41,
    comments: 0,
    text: "As our population ages, the importance of holistic senior care becomes increasingly evident. Holistic senior …",
  },
  {
    id: 2,
    // img: "/images/article2.jpg",
    title: "Music Therapy Strikes a Chord with Residents",
    date: "Sep 10, 2022",
    category: "Senior Care",
    views: 21,
    comments: 0,
    text: "As our population ages, the importance of holistic senior care becomes increasingly evident. Holistic senior …",
  },
  {
    id: 3,
    title: "Culinary Delights: Cooking Classes Elevate Dining Experience",
    date: "Aug 5, 2021",
    category: "Nutrition",
    views: 14,
    comments: 1,
    text: "As our population ages, the importance of holistic senior care becomes increasingly evident. Holistic senior care …",
  },
  {
    id: 4,
    title: "Complete Wellness Unleashed: A Comprehensive Guide to Elderly Care",
    date: "Jul 7, 2021",
    category: "Emotions",
    views: 17,
    comments: 2,
    text: "As our population ages, the importance of holistic senior care becomes increasingly evident. Holistic senior care …",
  },
];

const HostelLife = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <section className="hostel-hero">
        <h1>Our College Hostel Life</h1>
        <p className="breadcrumb">
          <a href="/">Home</a> &gt; Hostel Life
        </p>
      </section>

      <section className="feature-icons-section">
        {features.map((item, index) => (
          <div className="feature-item" key={index}>
            <div className="icon">{item.icon}</div>
            <p className="label">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="dignity-care-section">
        <div className="dignity-care-image">
          <img src={careImage} alt="Caregiver and elderly woman" />
        </div>
        <div className="dignity-care-content">
          <p className="care-subtitle">about living</p>
          <h2>
            Aging with Dignity: Senior <br />
            Care for a Life Enjoyig
          </h2>
          <p className="care-description">
            Health services are provided, including regular health check-ups,
            medication distribution and chronic disease care. Opportunities for
            communication and social activities are provided to support
            psychological well-being.
          </p>
          <div className="care-actions">
            <button className="care-btn" onClick={() => navigate("/read-more")}>
              READ MORE →
            </button>
            <div className="call-box">
              <div className="icon-wrap">
                <FiPhone />
              </div>
              <p className="phone-text">0 (800) 255-52-38</p>
            </div>
          </div>
        </div>
      </section>

      <section className="care-info-section">
        <p>
          At our center, seniors can choose between single, double and multi-bed
          rooms, where{" "}
          <span className="highlight">24-hour care is provided</span>, including
          bathing, dressing and <br /> room cleaning
        </p>
      </section>

      <section className="apartments-section">
        <div className="apartments-left">
          <img src={buildingImg} alt="Apartment Building" />
        </div>
        <div className="apartments-right">
          {apartments.map((apt, i) => (
            <div className="apartment-card" key={i}>
              <img src={apt.img} alt={apt.title} className="apartment-img" />
              <div className="apartment-content">
                <h4>{apt.title}</h4>
                <p>{apt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="emergency-call">
        <div className="emergency-content">
          <p className="subtitle">about living</p>
          <h2 className="title">
            Ambulance call <br /> in critical situations
          </h2>
          <p className="description">
            Personalized Senior Care at Its Best Cherished <br />
            Comforts Exceptional Senior Care for Every Stage <br />
            Where Compassion
          </p>
          <div className="emergency-actions">
            <button
              className="read-more-btn"
              onClick={() => navigate("/read-more")}
            >
              READ MORE →
            </button>
            <div className="phone-contact">
              <div className="icon-wrapper">
                <FiPhoneCall />
              </div>
              <span>0 (800) 255-52-38</span>
            </div>
          </div>
        </div>
        <div className="emergency-image">
          <img src={Emergency} alt="Doctor with senior" />
        </div>
      </section>

      <section className="meals-section">
        <div className="meals-image">
          <img src={ MealImg } alt="Meal Tray" />
        </div>
        <div className="meals-content">
          <p className="meals-subtitle">our cuisine</p>
          <h2 className="meals-title">
            Three meals a day, <br />
            according to dietary <br />
            requirements
          </h2>
          <div className="meals-list">
            {meals.map((meal, index) => (
              <div className="meal-item" key={index}>
                <FaClock className="meal-icon" />
                <div className="meal-details">
                  <h4>{meal.time}</h4>
                  <p>{meal.title}</p>
                  <p>{meal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <p className="team-subtitle">our team</p>
        <h2 className="team-title">Meet our Nurses</h2>
        <p className="team-desc">
          Creating a supportive environment that accommodates seniors’ unique
          needs and preferences allows them to maintain a sense of control and
          autonomy in their lives.
        </p>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.id}>
              {/* <div className="img-container">
                <img src={member.img} alt={member.name} />
              </div> */}
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="articles-section">
        <p className="articles-subtitle">our blog</p>
        <h2 className="articles-title">Recent Articles</h2>
        <div className="articles-grid">
          {/* Left 2 with images */}
          <div className="articles-left">
            {articles.slice(0, 2).map((item) => (
              <div key={item.id} className="article-card image-card">
                {/* <img src={item.img} alt={item.title} /> */}
                <div className="article-meta">
                  <span>
                    <BsFillCalendarDateFill /> {item.date}
                  </span>
                  <span>| {item.category} |</span>
                  <span>
                    <FaRegEye /> {item.views}
                  </span>
                  <span>
                    <FaRegCommentDots /> {item.comments}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>
                  {item.text ||
                    "As our population ages, the importance of holistic senior care becomes increasingly evident. Holistic senior …"}
                </p>
              </div>
            ))}
          </div>
          {/* Right 2 text only */}
          <div className="articles-right">
            {articles.slice(2).map((item) => (
              <div key={item.id} className="article-card text-card">
                <div className="article-meta">
                  <span>
                    <BsFillCalendarDateFill /> {item.date}
                  </span>
                  <span>| {item.category} |</span>
                  <span>
                    <FaRegEye /> {item.views}
                  </span>
                  <span>
                    <FaRegCommentDots /> {item.comments}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="more-btn-wrap">
          <button className="more-btn" onClick={() => navigate("/read-more")}>
            MORE ARTICLES →
          </button>
        </div>
      </section>
    </div>
  );
};

export default HostelLife;
