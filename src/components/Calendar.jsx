import React from "react";
import "../styles/Events.css";

export default function Calendar() {
    const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const dates = Array.from({ length: 30 }, (_, i) => i + 1);

    return (
        <div className="calendar">
            <h4>Select a Date & Time</h4>
            <div className="calendar-header">
                <button><i className="fas fa-chevron-left"></i></button>
                <span>April 2024</span>
                <button><i className="fas fa-chevron-right"></i></button>
            </div>
            <div className="calendar-days">
                {days.map((day) => <div key={day}>{day}</div>)}
            </div>
            <div className="calendar-dates">
                {dates.map((date) => {
                    let className = "calendar-date";
                    if ([17, 23, 24, 29, 30].includes(date)) className += " selected";
                    else if ([25, 26].includes(date)) className += " partial";
                    return <button key={date} className={className}>{date}</button>;
                })}
            </div>
        </div>
    );
}
