// src/components/OfflineCard.jsx
import { useNavigate } from "react-router-dom";
export default function OfflineCard() {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-wrap gap-3">
      {Array(6).fill(0).map((_, i) => (
        <div key={i} className="card p-3" style={{ background: "#ecffaa", width: "30%" }}>
        <img src="/images/Img 1.png" width={50} height={50} style={{ borderRadius: "50%" }} />
  <h5>Ramesh</h5>
          <p><b>Durations:</b> 90 Days</p>
          <p><b>Course Name:</b> UI/UX Design</p>
          <p><b>Class Mode:</b> Offline</p>
          <p>📧 rameshuiux@vts.in</p>
          <p>📞 8916800278</p>
          <button className="btn btn-dark btn-sm" onClick={() => navigate("/profile")}>View More</button>
        </div>
      ))}
    </div>
  );
}
