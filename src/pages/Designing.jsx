// src/pages/Designing.jsx
import React, { useState } from "react";
import "./Overview.css";
import { FaSearch } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./Designing.css";

import {
  FaBell,
  FaUserCircle,
  FaUsers,
  FaBook,
  FaClipboardList,
  FaClipboardCheck,
} from "react-icons/fa";
import { GiPencilRuler } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";

const Designing = () => {
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const selectedMode = document.querySelector('input[name="mode"]:checked')?.id;

    if (selectedMode === "online") navigate("/designing/online");
    else if (selectedMode === "offline") navigate("/designing/offline");

    setShowFilter(false);
  };

  return (
    <div className="overview-container d-flex">
      {/* ✅ Sidebar from Overview.jsx */}
      <div className="sidebar p-3">
        <div className="logo-box mb-4">
          <img src="./images/logo.png" alt="Logo" width={30} />
          VTS Exam Portal
        </div>
        <ul className="nav flex-column">
          <li className="nav-item" onClick={() => navigate('/overview')}>
            <FaUsers /> Overview
          </li>
          <li className="nav-item active" onClick={() => navigate('/designing')}>
            <GiPencilRuler /> Designing
          </li>
          <li className="nav-item" onClick={() => navigate("/development")}>
            <AiOutlineFundProjectionScreen /> Development
          </li>
          <li className="nav-item" onClick={() => navigate("/exam")}>
            <FaClipboardCheck /> Exam
          </li>
          <li className="nav-item" onClick={() => navigate("/result")}>
            <BsClipboardData /> Result
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content flex-grow-1 p-4">
        {/* Topbar */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="search-box me-3 d-flex align-items-center border rounded px-2">
            <input className="form-control border-0" placeholder="Search" />
            <FaSearch />
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-dark" onClick={() => setShowFilter(true)}>🔍 Filter</button>
            <button className="btn btn-dark">+ Add Trainees</button>
          </div>
        </div>

        {/* Active Trainers + Upcoming Exams */}
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="card trainer-card p-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5>Active Trainers</h5>
                <span className="view-all">View All</span>
              </div>
              <div className="trainer mb-2">
                <img src="/images/Img 1.png" className="trainer-img" alt="Priya" />
                <div>
                  <strong>Priya</strong><br />
                  <small>UI/UX Designer</small>
                </div>
                <button className="btn btn-outline-dark btn-sm ms-auto">15 Trainees</button>
              </div>
              <div className="trainer mb-2">
                <img src="/images/Img 2.png" className="trainer-img" alt="Rithika" />
                <div>
                  <strong>Rithika</strong><br />
                  <small>UI/UX Designer</small>
                </div>
                <button className="btn btn-outline-dark btn-sm ms-auto">15 Trainees</button>
              </div>
              <div className="trainer">
                <img src="/images/Img 3.png" className="trainer-img" alt="Reshma" />
                <div>
                  <strong>Reshma</strong><br />
                  <small>UI/UX Designer</small>
                </div>
                <button className="btn btn-outline-dark btn-sm ms-auto">15 Trainees</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card question-card p-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5>Upcoming Exams</h5>
                <button className="btn btn-dark btn-sm">Upload New Exam</button>
              </div>
              <div className="exam-box mb-2 p-2 border rounded">
                <strong>Figma Technical Questions</strong>
                <p className="mb-1">Duration: 30 Minutes</p>
                <small>May 15, 2025 – 2:30 PM</small>
              </div>
              <div className="exam-box p-2 border rounded">
                <strong>Figma Practical Questions</strong>
                <p className="mb-1">Duration: 1 Day</p>
                <small>May 16, 2025 – 4:00 PM</small>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="card p-4 text-center border-dashed mt-4">
          <MdOutlineFileUpload size={40} className="mb-2" />
          <p>Drag and drop your files here <br />or</p>
          <button className="btn btn-dark">Browse Files</button>
          <small className="d-block mt-2">Supported formats: PDF, DOC, DOCX (Max: 10MB)</small>
        </div>
      </div>

      {/* Filter Modal */}
      {showFilter && (
        <div className="filter-modal d-flex justify-content-center align-items-center">
          <div className="filter-box p-4 rounded shadow bg-white">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Filter By</h5>
              <IoMdClose size={24} style={{ cursor: "pointer" }} onClick={() => setShowFilter(false)} />
            </div>
            <form onSubmit={handleFilterSubmit}>
              <div className="mb-3">
                <label>Trainees Name</label>
                <input className="form-control" placeholder="Enter name" />
              </div>
              <div className="mb-3">
                <label>Course Name</label>
                <input className="form-control" placeholder="Enter course" />
              </div>
              <div className="mb-3">
                <label>Durations</label>
                <input className="form-control" placeholder="e.g., 30 Minutes" />
              </div>
              <div className="mb-3">
                <label>Class Mode</label>
                <div>
                  <input type="radio" name="mode" id="online" />
                  <label htmlFor="online" className="ms-1 me-3">Online</label>
                  <input type="radio" name="mode" id="offline" />
                  <label htmlFor="offline" className="ms-1">Offline</label>
                </div>
              </div>
              <button className="btn btn-success w-100" type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Designing;
