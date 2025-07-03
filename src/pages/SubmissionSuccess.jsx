import { useNavigate } from "react-router-dom";
import "./Overview.css"; // Sidebar + shared styles

// Sidebar icons
import { FaUsers, FaClipboardCheck } from "react-icons/fa";
import { GiPencilRuler } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";

export default function SubmissionSuccess() {
  const navigate = useNavigate();

  return (
    <div className="d-flex overview-container" style={{ minHeight: "100vh" }}>
      {/* ✅ Sidebar - Matching Overview.jsx */}
      <div className="sidebar p-3">
        <div className="logo-box mb-4">
          <img src="/images/logo.png" alt="Logo" width={30} />
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
      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-5 text-center">
        <img src="/images/Submitted img.png" width={100} alt="Success" />
        <h4 className="mt-3" style={{ color: "#201F31" }}>
          Thank You! Your response has been submitted
        </h4>
        <button
          className="btn mt-3"
          style={{ backgroundColor: "#d8f275", color: "#201F31", fontWeight: "bold" }}
          onClick={() => navigate("/result")}
        >
          Done
        </button>
      </div>
    </div>
  );
}
