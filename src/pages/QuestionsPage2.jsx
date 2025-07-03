import React from "react";
import { useNavigate } from "react-router-dom";
import "./Overview.css"; // Reuse sidebar styles

// Sidebar icons
import { FaUsers, FaClipboardCheck } from "react-icons/fa";
import { GiPencilRuler } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";

export default function QuestionsPage2() {
  const navigate = useNavigate();

  return (
    <div className="d-flex overview-container">
      {/* ✅ Sidebar updated to match Overview.jsx */}
      <div className="sidebar p-3">
        <div className="logo-box mb-4">
          <img src="./images/logo.png" alt="Logo" width={30} />
          VTS Exam Portal
        </div>
        <ul className="nav flex-column">
          <li className="nav-item" onClick={() => navigate("/overview")}>
            <FaUsers /> Overview
          </li>
          <li className="nav-item" onClick={() => navigate("/designing")}>
            <GiPencilRuler /> Designing
          </li>
          <li className="nav-item" onClick={() => navigate("/development")}>
            <AiOutlineFundProjectionScreen /> Development
          </li>
          <li className="nav-item active" onClick={() => navigate("/exam")}>
            <FaClipboardCheck /> Exam
          </li>
          <li className="nav-item" onClick={() => navigate("/result")}>
            <BsClipboardData /> Result
          </li>
        </ul>
      </div>

      {/* ✅ Main Content */}
      <div className="flex-grow-1 p-4 text-center">
        <h4 className="fw-bold mb-4" style={{ color: "#201F31" }}>Figma Technical Questions</h4>

        {[6, 7, 8, 9, 10].map((q) => (
          <div key={q} className="mb-4 text-start mx-auto" style={{ maxWidth: "700px" }}>
            <p className="fw-semibold">{q}. Where label text can be aligned?</p>
            <div className="d-flex justify-content-start gap-4 flex-wrap">
              {["Top", "Right", "Center", "Left"].map((opt) => (
                <label key={opt} className="me-3">
                  <input type="radio" name={`q${q}`} className="me-1" /> {opt}
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="d-flex justify-content-center gap-3 mt-4">
          <button
            className="btn"
            style={{ backgroundColor: "#201F31", color: "#fff" }}
            onClick={() => navigate("/questions/page1")}
          >
            Previous
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "#d8f275", color: "#201F31", fontWeight: "bold" }}
            onClick={() => navigate("/exam/submitted")}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
