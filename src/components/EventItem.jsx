import React from "react";
import "../styles/Events.css";

export default function EventItem() {
    return (
        <>
            <h2>Event List –</h2>

            <article className="event-item">
                <img
                    src="https://storage.googleapis.com/a1aa/image/00633103-3d3f-4fcd-92d6-b156b85dfb2e.jpg"
                    alt="Blonde Woman"
                    className="event-avatar"
                />
                <p className="event-account">Account name</p>
                <h3 className="event-title">Event title</h3>
                <ul className="event-details">
                    <li><i className="far fa-clock"></i> 30 min</li>
                    <li><i className="far fa-file-alt"></i> Web conferencing details provided upon confirmation.</li>
                    <li><i className="far fa-calendar-alt"></i> 19:00 - 19:45, Monday, August 19, 2024</li>
                    <li><i className="fas fa-globe"></i> Asia/Yerevan</li>
                </ul>
                <button className="join-btn">Join Event</button>
            </article>

            <article className="event-item">
                <img
                    src="https://storage.googleapis.com/a1aa/image/c8ee5cd3-3a69-47b0-42c4-1bde36fe3226.jpg"
                    alt="Man With Beard"
                    className="event-avatar highlight"
                />
                <p className="event-account">Account name</p>
                <h3 className="event-title">Event title</h3>
                <ul className="event-details">
                    <li><i className="far fa-clock"></i> 30 min</li>
                    <li><i className="far fa-file-alt"></i> Web conferencing details provided upon confirmation.</li>
                    <li><i className="far fa-calendar-alt"></i> 19:00 - 19:45, Monday, August 19, 2024</li>
                    <li><i className="fas fa-globe"></i> Asia/Yerevan</li>
                </ul>
                <button className="join-btn">Join Event</button>
            </article>
        </>
    );
}
