import React from "react";
import profile from "../../assets/client.jpg";

const ConfirmationPage = () => {
  return (
    <div className="container py-5 text-center">

      <img
        src={profile}
        alt="profile"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
        className="mb-4"
      />


      <h5 className="text-primary fw-semibold">
        <i className="bi bi-check-circle-fill me-2"></i> You are scheduled
      </h5>
      <p className="text-muted">
        A calendar invitation has been sent to your email address.
      </p>

      <div className="mx-auto mt-4 text-start" style={{ maxWidth: "500px" }}>
        <div className="border rounded p-4 bg-light">
          <h6 className="fw-bold mb-3">Schedule eClosing</h6>
          <p className="mb-2">
            <i className="bi bi-person me-2"></i>Khatchadour Israelyan
          </p>
          <p className="mb-2">
            <i className="bi bi-calendar3 me-2"></i>19:00 - 19:45, Monday, August 19, 2024
          </p>
          <p className="mb-2">
            <i className="bi bi-geo-alt me-2"></i>Asia/Kolkata
          </p>
          <p className="mb-0">
            <i className="bi bi-file-earmark-text me-2"></i>Web conferencing details to follow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
