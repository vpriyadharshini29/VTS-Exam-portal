import React from 'react';
import './Overview.css';
import { FaSearch, FaBell, FaUserCircle, FaUsers, FaBook, FaClipboardList } from 'react-icons/fa';
import { MdOutlineFileUpload } from 'react-icons/md';
import { GiPencilRuler } from 'react-icons/gi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { FaClipboardCheck } from 'react-icons/fa';

import { BsClipboardData } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Overview = () => {
  const navigate = useNavigate();

  return (
    <div className="overview-container d-flex">
      {/* Sidebar */}
      <div className="sidebar p-3">
        <div className="logo-box mb-4">
          <img src="./images/logo.png" alt="Logo" width={30} />
          VTS Exam Portal
        </div>
        <ul className="nav flex-column">
          <li className="nav-item active" onClick={() => navigate('/overview')}>
            <FaUsers /> Overview
          </li>
          <li className="nav-item" onClick={() => navigate('/designing')}>
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
          <div>
            <h4 className="mb-0 fw-bold">Good Morning!!!</h4>
            <small>It's Monday 10 May 2025</small>
          </div>
          <div className="d-flex align-items-center">
            <div className="search-box me-3 d-flex align-items-center border rounded px-2">
              <input className="form-control border-0" placeholder="Search" />
              <FaSearch />
            </div>
            <FaBell className="me-3 icon" />
            <FaUserCircle className="icon" />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card stat-card yellow">
              <div>
                <h5>Total Trainees</h5>
                <p className="display-6 fw-bold">500</p>
              </div>
              <FaUsers className="stat-icon" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card stat-card green">
              <div>
                <h5>Active Courses</h5>
                <p className="display-6 fw-bold">15</p>
              </div>
              <FaBook className="stat-icon" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card stat-card pink">
              <div>
                <h5>Upcoming Exams</h5>
                <p className="display-6 fw-bold">12</p>
              </div>
              <FaClipboardList className="stat-icon" />
            </div>
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

        {/* Upload Question Paper */}
        <div className="card p-4 text-center border-dashed">
          <MdOutlineFileUpload size={40} className="mb-2" />
          <p>Drag and drop your files here <br />or</p>
          <button className="btn btn-dark">Browse Files</button>
          <small className="d-block mt-2">Supported formats: PDF, DOC, DOCX (Max: 10MB)</small>
        </div>
      </div>
    </div>
  );
};

export default Overview;
