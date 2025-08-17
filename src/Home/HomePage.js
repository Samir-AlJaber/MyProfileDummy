import React, { useState } from "react";
import { Badge, Pagination } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./HomePage.css";
import profilePic from "../assets/profile.jpg";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const { page } = useParams();
  const currentPage = page ? +page : 1;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Dummy data per page
  const articlesData = {
    1: [
      { id: 1, title: "Intro to React", date: "2025-08-01", status: "Published" },
      { id: 2, title: "Advanced JS", date: "2025-08-05", status: "Draft" },
    ],
    2: [
      { id: 3, title: "UI/UX Design Basics", date: "2025-08-10", status: "Published" },
      { id: 4, title: "Database Management", date: "2025-08-15", status: "Pending" },
    ],
    3: [
      { id: 5, title: "Node.js Fundamentals", date: "2025-08-20", status: "Published" },
      { id: 6, title: "CSS Grid & Flexbox", date: "2025-08-25", status: "Draft" },
    ],
  };

  const articles = articlesData[currentPage] || [];

  const totalPages = Object.keys(articlesData).length;

  const handlePageClick = (pageNumber) => {
    navigate(`/page/${pageNumber}`);
  };

  const renderBadge = (status) => {
    switch (status) {
      case "Published":
        return <Badge pill bg="success">{status}</Badge>;
      case "Draft":
        return <Badge pill bg="warning" text="dark">{status}</Badge>;
      case "Pending":
        return <Badge pill bg="primary">{status}</Badge>;
      default:
        return <Badge pill bg="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? "⮜" : "⮞"}
        </button>
        <ul>
          <li>{isOpen ? "Profile" : "👤"}</li>
          <li>{isOpen ? "My Articles" : "📝"}</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-wrapper">
          {/* Profile Card */}
          <div className="profile-card">
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <div>
              <h2 className="profile-name">Samir Al Zaber</h2>
              <p className="profile-info">📧 samir.cse.20230104136@aust.edu</p>
              <p className="profile-info">📅 Joined: 01 Jan 2025</p>
            </div>
          </div>

          {/* Articles Table */}
          <div className="table-section">
            <h3 className="section-title">My Articles (Page {currentPage})</h3>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr key={article.id}>
                    <td>{article.title}</td>
                    <td>{article.date}</td>
                    <td>{renderBadge(article.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <Pagination className="justify-content-center mt-3">
            <Pagination.Prev onClick={() => handlePageClick(Math.max(1, currentPage - 1))} />
  
                {[...Array(totalPages)].map((_, i) => (
                    <Pagination.Item
                        key={i + 1}
                        active={currentPage === i + 1}
                        onClick={() => handlePageClick(i + 1)}
                    >
                        {i + 1}
                    </Pagination.Item>
                ))}
  
            <Pagination.Next onClick={() => handlePageClick(Math.min(totalPages, currentPage + 1))} />
        </Pagination>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
