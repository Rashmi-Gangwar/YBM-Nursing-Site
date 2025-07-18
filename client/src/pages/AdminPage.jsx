import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPage.css";

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ybm-nursing-site.onrender.com/api/v1/admin", {
        withCredentials: true,
      })
      .then((res) => setUsers(res.data.user))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://ybm-nursing-site.onrender.com/api/v1/admin/${id}`,
        {
          withCredentials: true,
        }
      );
      setUsers(users.filter((user) => user._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Hero */}
      <section className="apply-hero">
        <h1>Submitted Application</h1>
        <p className="breadcrumb">
          <a href="/">Home</a> &gt; Submitted Application
        </p>
      </section>

      <div className="user-cards">
        {users.map((user) => (
          <div key={user._id} className="user-card">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Course:</strong> {user.course}
            </p>
            <p>
              <strong>Message:</strong> {user.message}
            </p>
            <button
              className="delete-button"
              onClick={() => handleDelete(user._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
