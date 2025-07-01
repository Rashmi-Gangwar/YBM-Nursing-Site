import React from "react";
import "./Blog.css";
import Blog1 from "./images/blog1.png";
import Blog2 from "./images/blog2.png";
import Blog3 from "./images/blog3.png";

import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegCommentDots } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    img: Blog1,
    title: "Importance of Compassion in Nursing",
    date: "June 10, 2025",
    category: "Nursing Ethics",
    views: 215,
    comments: 12,
    description:
      "Nurses must balance professional care with human connection. Learn why compassion is a key pillar of our curriculum.",
  },
  {
    id: 2,
    img: Blog2,
    title: "Top Skills for Modern Nursing Students",
    date: "June 5, 2025",
    category: "Skills & Training",
    views: 340,
    comments: 8,
    description:
      "Explore the must-have skills every nursing student should master in today's evolving healthcare system.",
  },
  {
    id: 3,
    img: Blog3,
    title: "Clinical Training at Sunrise",
    date: "May 29, 2025",
    category: "Student Life",
    views: 280,
    comments: 15,
    description:
      "Our hands-on clinical programs ensure students graduate with confidence. Here’s how it works.",
  },
  {
    id: 4,
    img: Blog1,
    title: "Importance of Compassion in Nursing",
    date: "June 10, 2025",
    category: "Nursing Ethics",
    views: 215,
    comments: 12,
    description:
      "Nurses must balance professional care with human connection. Learn why compassion is a key pillar of our curriculum.",
  },
  {
    id: 5,
    img: Blog2,
    title: "Top Skills for Modern Nursing Students",
    date: "June 5, 2025",
    category: "Skills & Training",
    views: 340,
    comments: 8,
    description:
      "Explore the must-have skills every nursing student should master in today's evolving healthcare system.",
  },
  {
    id: 6,
    img: Blog3,
    title: "Clinical Training at Sunrise",
    date: "May 29, 2025",
    category: "Student Life",
    views: 280,
    comments: 15,
    description:
      "Our hands-on clinical programs ensure students graduate with confidence. Here’s how it works.",
  },
  {
    id: 7,
    img: Blog1,
    title: "Balancing Academics & Practicals",
    date: "May 18, 2025",
    category: "Tips",
    views: 198,
    comments: 4,
    description:
      "Managing time between lectures, labs, and clinical duties? Read these top 5 strategies to stay on top.",
  },
  {
    id: 8,
    img: Blog2,
    title: "A Day in the Life of a Nursing Student",
    date: "May 9, 2025",
    category: "Student Stories",
    views: 410,
    comments: 22,
    description:
      "Join one of our students as she takes you through her day—from class to hospital rounds and study groups.",
  },
  {
    id: 9,
    img: Blog3,
    title: "Emergency Response Training Workshop",
    date: "April 30, 2025",
    category: "Workshops",
    views: 180,
    comments: 9,
    description:
      "See how students learn hands-on CPR, triage systems, and real emergency protocols during our latest workshop.",
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <h1>College Blog & Articles</h1>
        <p className="breadcrumb">
          <a href="/">Home</a> &gt; Blog
        </p>
      </section>

      {/* Blog Posts */}
      <section className="blog-posts">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.img} alt={post.title} className="blog-img" />
            <div className="blog-content">
              <div className="meta">
                <span>
                  <BsFillCalendarDateFill /> {post.date}
                </span>
                <span>| {post.category} |</span>
                <span>
                  <FaRegEye /> {post.views}
                </span>
                <span>
                  <FaRegCommentDots /> {post.comments}
                </span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <button
                className="read-btn"
                onClick={() => navigate("/read-more")}
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="blog-cta">
        <h2>Stay Informed, Stay Inspired</h2>
        <p>
          Subscribe to our newsletter to never miss an update from YBM Nursing
          College.
        </p>
        <button className="cta-btn">Subscribe</button>
      </section>
    </div>
  );
};

export default Blog;
