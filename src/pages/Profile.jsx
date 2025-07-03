// src/pages/Profile.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Profile.css";

// Icons
import { FaUsers, FaClipboardCheck } from "react-icons/fa";
import { GiPencilRuler } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";

// ✅ Image import (adjust path as needed)

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="d-flex overview-container">
      {/* ✅ Sidebar - same as Overview */}
      <div className="sidebar p-3">
        <div className="logo-box mb-4">
          <img src="./images/logo.png" alt="Logo" width={30} />
          VTS Exam Portal
        </div>
        <ul className="nav flex-column">
          <li className="nav-item" onClick={() => navigate("/overview")}>
            <FaUsers /> Overview
          </li>
          <li className="nav-item active" onClick={() => navigate("/designing")}>
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

      {/* ✅ Main Content */}
      <div className="flex-grow-1 p-4">
        <div className="d-flex justify-content-between align-items-start mb-4">
          {/* ✅ Left Section */}
          <div>
            <h4 className="fw-bold">Welcome Kavyaa</h4>
            <p>It’s Monday 10 May 2025</p>

            <div className="card exam-card p-3 border border-dark mb-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold mb-0">Technical Questions</h5>
                <button className="btn btn-dark"onClick={() => navigate("/questions/page1")}>Start Exam</button>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Figma Technical Questions</span>
                <span>May 15, 2025 – 2:30 PM</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Figma Practical Questions</span>
                <span>May 16, 2025 – 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* ✅ Right Section - Profile Card */}
          <div className="card p-3 profile-card">
            <div className="text-center">
              <img
                src="./images/Img 5.png"
                width={80}
                className="rounded-circle mb-2"
                alt="Kavya"
              />
              <h5>Kavya</h5>
              <p className="mb-1">UI/UX Designing</p>
            </div>

            {/* ✅ Progress Bars */}
            <div>
              <label>Figma</label>
              <div className="progress mb-2">
                <div className="progress-bar bg-custom" style={{ width: "95%" }}>95%</div>
              </div>

              <label>Adobe Photoshop</label>
              <div className="progress mb-2">
                <div className="progress-bar bg-custom" style={{ width: "20%" }}>20%</div>
              </div>
            </div>

            {/* ✅ Calendar */}
            <div className="mt-3 calendar-wrapper">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
