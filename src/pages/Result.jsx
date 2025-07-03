import { useNavigate } from "react-router-dom";
import "./Overview.css"; // Sidebar styling
import "./Result.css";   // Result-specific styling

// Sidebar icons
import { FaUsers, FaClipboardCheck } from "react-icons/fa";
import { GiPencilRuler } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";

export default function Result() {
  const navigate = useNavigate();

  const results = [
    { name: "Kavya", trainer: "Priya", tech: 20, practical: 40 },
    { name: "Diya", trainer: "Priya", tech: 10, practical: 50 },
    { name: "Geetha", trainer: "Priya", tech: 15, practical: 45 },
    { name: "Keerthi", trainer: "Priya", tech: 10, practical: 60 },
    { name: "Sujitha", trainer: "Priya", tech: 20, practical: 30 },
    { name: "Ramu", trainer: "Priya", tech: 25, practical: 60 },
    { name: "Ram", trainer: "Priya", tech: 15, practical: 30 },
  ];

  return (
    <div className="d-flex result-page" style={{ minHeight: "100vh" }}>
      {/* ✅ Sidebar - Matching Overview */}
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
          <li className="nav-item" onClick={() => navigate("/exam")}>
            <FaClipboardCheck /> Exam
          </li>
          <li className="nav-item active" onClick={() => navigate("/result")}>
            <BsClipboardData /> Result
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        {/* Summary Cards */}
        <div className="d-flex gap-4 justify-content-center mb-4 flex-wrap">
          <div className="summary-card">
            <p>Total Trainees</p>
            <h3>15</h3>
          </div>
          <div className="summary-card">
            <p>Total Marks</p>
            <h3>100</h3>
          </div>
          <div className="summary-card">
            <p>No of Student Present</p>
            <h3>10</h3>
          </div>
          <div className="summary-card">
            <p>No of Student Absent</p>
            <h3>5</h3>
          </div>
        </div>

        {/* Result Table */}
        <div className="card p-3 mt-2">
          <table className="table table-bordered text-center">
            <thead style={{ backgroundColor: "#201F31", color: "#fff" }}>
              <tr>
                <th>S.no</th>
                <th>Trainee’s Name</th>
                <th>Trainer Name</th>
                <th>Technical Marks (Out of 30)</th>
                <th>Practical Marks (Out of 70)</th>
                <th>Total Marks</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: "#d8f275" }}>
              {results.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>{item.name}</td>
                  <td>{item.trainer}</td>
                  <td>{item.tech}</td>
                  <td>{item.practical}</td>
                  <td>{item.tech + item.practical}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-4">
          <button className="btn btn-dark me-3 px-4">Download</button>
          <button
            className="btn"
            style={{ backgroundColor: "#d8f275", color: "#201F31", fontWeight: "bold" }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
