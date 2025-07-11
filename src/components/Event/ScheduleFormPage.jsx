import React from "react";
import profile from "../../assets/client.jpg";
import { useNavigate } from "react-router-dom";

const ScheduleFormPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5 d-flex justify-content-center align-items-start gap-5 flex-wrap">
      
      <div style={{ maxWidth: "400px" }}>
        <div className="d-flex align-items-center mb-3">
          <img
            src={profile}
            alt="avatar"
            className="me-3"
            style={{ width: 60, height: 60, borderRadius: "50%", objectFit: "cover" }}
          />
          <div>
            <p className="mb-0 text-muted" style={{ fontSize: "14px" }}>
              Account name
            </p>
            <h5 className="mb-0 fw-bold">Event title</h5>
          </div>
        </div>

        <ul className="list-unstyled text-muted small">
          <li className="mb-2">📅 19:00 - 19:45, Monday, August 19, 2024</li>
          <li className="mb-2">🕒 30 min</li>
          <li className="mb-2">📄 Web conferencing details provided upon confirmation.</li>
          <li className="mb-2">🌍 Asia/Yerevan</li>
        </ul>
      </div>

      <div style={{ maxWidth: "400px", borderLeft: "1px solid #eee", paddingLeft: "30px" }}>
        <h4 className="mb-4 fw-bold">Fill Your Details here -</h4>
        <div>
          <p className="fw-semibold mb-1">Enter details</p>
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control mb-3"
            value="Khatchadour"
            disabled
          />
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control mb-3"
            value="kh.israelyan@gmail.com"
            disabled
          />
          <small className="text-muted">
            By proceeding, you confirm that you have read and agree to&nbsp;
            <a href="https://calendly.com/terms" target="_blank" rel="noopener noreferrer">Calendly’s Terms of Use</a> and&nbsp;
            <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Notice</a>.
          </small>

          <button className="btn btn-primary mt-3 px-4"
            onClick={() => navigate("/event/confirmation")}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleFormPage;
