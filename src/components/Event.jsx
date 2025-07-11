import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import profile1 from "../assets/client.jpg";
import profile2 from "../assets/EventO.png";
import "./Event.css"; // Custom styles

const Event = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [selectedDate, setSelectedDate] = useState(new Date());

  const times = [
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  ];

  const events = [
    {
      id: 1,
      name: "Maria",
      title: "Event title",
      image: profile1,
    },
    {
      id: 2,
      name: "John",
      title: "Event title",
      image: profile2,
    },
  ];

  const handleNext = () => setStep(2);
  const handleSubmit = () => setStep(3);

  return (
    <div className="container py-4">
      {step === 1 && (
        <>
          <h3 className="fw-bold mb-4">Event Listes -</h3>
          <div className="row">
            {/* LEFT SIDE - Event Cards */}
            <div className="col-md-5 mx-auto">
              {events.map((event) => (
                <div className="card mb-4 border-0 shadow-sm" key={event.id}>
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src={event.image}
                        alt="avatar"
                        className="me-3"
                        style={{ width: 50, height: 50, borderRadius: "50%" }}
                      />
                      <div>
                        <p className="mb-0 text-muted" style={{ fontSize: "14px" }}>
                          Account name
                        </p>
                        <h5 className="mb-0">{event.title}</h5>
                      </div>
                    </div>
                    <ul className="list-unstyled small text-muted mb-3">
                      <li>🕒 30 min</li>
                      <li className="my-2">
                        📄 Web conferencing details provided upon confirmation.
                      </li>
                      <li>📅 19:00 - 19:45, Monday, August 19, 2024</li>
                      <li>🌍 Asia/Kolkata</li>
                    </ul>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-primary px-4">Join Event</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE - Calendar & Time Slots */}
            <div className="col-md-6">
              <div className="d-flex justify-content-between align-items-start gap-4 flex-wrap">
                {/* Calendar */}
                <div style={{ flex: 1 }}>
                  <h5 className="mb-3 fw-bold">Select a Date & Time</h5>
                  <div
                    className="bg-white p-3 rounded shadow-sm border mb-3"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Calendar
                      onChange={(date) => setSelectedDate(date)}
                      value={selectedDate}
                    />
                  </div>
                  <p className="mt-3 mb-0 fw-semibold">Time zone</p>
                  <small className="text-muted">🌍 Asia/Kolkata (Local time)</small>
                </div>

                {/* Time Buttons */}
                <div className="text-end" style={{ minWidth: "120px" }}>
                  <p className="fw-semibold mb-2">
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <div className="d-flex flex-column gap-2">
                    {times.map((time) => (
                      <button
                        key={time}
                        className="btn btn-outline-primary fw-semibold"
                        style={{ borderRadius: "8px", borderWidth: "2px" }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <button
                  className="btn btn-primary px-4 py-2 fw-bold"
                  onClick={handleNext}
                >
                  Schedule New Event
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* STEP 2 - Form */}
      {step === 2 && (
        <div className="p-4" style={{ maxWidth: "400px" }}>
          <h4>Fill Your Details here -</h4>
          <div className="mt-4">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <button className="btn btn-success" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}

      {/* STEP 3 - Confirmation */}
      {step === 3 && (
        <div className="p-4">
          <h2 className="text-success">✅ You are scheduled</h2>
          <p className="mt-3">
            A calendar invitation has been sent to your email address.
          </p>
          <div className="card mt-3 p-3">
            <h5>Schedule eClosing</h5>
            <p><strong>{formData.name}</strong></p>
            <p>📅 {selectedDate.toDateString()}</p>
            <p>🌍 Asia/Kolkata</p>
            <p>📄 Web conferencing details to follow.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;
