import { useNavigate } from "react-router-dom";
import { MdOutlineFileUpload } from "react-icons/md";
import "./Overview.css"; // for sidebar
import "./Developement.css"; // custom styling

import {
  FaSearch,
  FaBell,
  FaUserCircle,
  FaUsers,
  FaBook,
  FaClipboardList,
  FaClipboardCheck,
} from 'react-icons/fa';
import { GiPencilRuler } from 'react-icons/gi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BsClipboardData } from 'react-icons/bs';

export default function Development() {
  const navigate = useNavigate();

  const renderUploadCard = (title) => (
    <div className="card upload-card p-3 mb-4">
      <h6 className="mb-3">{title}</h6>
      <div className="upload-area text-center p-4 border-dashed rounded">
        <MdOutlineFileUpload size={40} color="#d8f275" className="mb-2" />
        <p>Drag and drop your files here <br />or</p>
        <button className="btn btn-dark">Browse Files</button>
        <small className="d-block mt-2 text-muted">
          Supported formats: PDF, DOC, DOCX (Max: 10MB)
        </small>
      </div>
    </div>
  );

  return (
    <div className="d-flex development-page" style={{ minHeight: "100vh" }}>
      {/* ✅ Sidebar copied from Overview.jsx */}
      <div className="sidebar p-3">
        <div className="logo-box mb-4">
          <img src="./images/logo.png" alt="Logo" width={30} />
          VTS Exam Portal
        </div>
        <ul className="nav flex-column">
          <li className="nav-item" onClick={() => navigate('/overview')}>
            <FaUsers /> Overview
          </li>
          <li className="nav-item" onClick={() => navigate('/designing')}>
            <GiPencilRuler /> Designing
          </li>
          <li className="nav-item active" onClick={() => navigate("/development")}>
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
      <div className="flex-grow-1 p-4">
        {renderUploadCard("Upload Technical Question Paper")}
        {renderUploadCard("Upload Practical Question Paper")}
      </div>
    </div>
  );
}
