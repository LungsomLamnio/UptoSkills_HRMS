import React from "react";
import "../styles/Events.css";

const EventItem = ({ imgSrc, imgAlt, border }) => (
    <article className="event-item">
        <img
            src={imgSrc}
            alt={imgAlt}
            className={`event-avatar ${border ? "highlight" : ""}`}
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
);

export default EventItem;
