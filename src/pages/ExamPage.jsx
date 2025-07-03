import React from "react";
import { useNavigate } from "react-router-dom";
import "./Overview.css"; // For sidebar styling

export default function ExamPage() {
  const navigate = useNavigate();

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <div className="sidebar p-3">
        <div className="logo text-center mb-4 fw-bold">VTS Exam Portal</div>
        <ul className="nav flex-column">
          <li className="nav-item" onClick={() => navigate("/overview")}>Overview</li>
          <li className="nav-item" onClick={() => navigate("/designing")}>Designing</li>
          <li className="nav-item" onClick={() => navigate("/development")}>Development</li>
          <li className="nav-item active" onClick={() => navigate("/exam")}>Exam</li>
          <li className="nav-item" onClick={() => navigate("/result")}>Result</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <h4 className="fw-bold mb-3">Upcoming Exams</h4>

        <div className="card p-3 border border-dark" style={{ background: "#ecffaa" }}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="fw-bold mb-0">Technical Questions</h5>
            <button className="btn btn-dark btn-sm" onClick={() => navigate("/questions/page1")}>Start Exam</button>
          </div>
          <div class="border-add">
          <p className="mb-1"><strong>Figma Technical Questions</strong></p>
          <p className="mb-0">May 15, 2025 – 2:30 PM</p>
          </div>
           <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="fw-bold mb-0">Practical Questions</h5>
            <button className="btn btn-dark btn-sm" onClick={() => navigate("/questions/page1")}>Start Exam</button>
          </div>
          <div class="border-add">
          <p className="mb-1"><strong>Figma Practical Questions</strong></p>
          <p className="mb-0">May 15, 2025 – 2:30 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
