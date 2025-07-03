// src/pages/OfflinePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import OfflineCard from "../components/OfflineCard";
import './Overview.css';

// Icons
import { FaUsers, FaClipboardCheck } from "react-icons/fa";
import { GiPencilRuler } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";

const OfflinePage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 d-flex overview-container">
      {/* ✅ Sidebar copied from Overview.jsx */}
      <div className="sidebar p-3">
        <div className="logo-box mb-4">
          <img src="/images/logo.png" alt="Logo" width={30} />
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

      {/* Main Content */}
      <div className="flex-grow-1">
        <OfflineCard />
      </div>
    </div>
  );
};

export default OfflinePage;
