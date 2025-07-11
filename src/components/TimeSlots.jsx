import React from "react";
import "../styles/Events.css";

export default function TimeSlots() {
    const times = [
        "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
        "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
    ];

    return (
        <section className="time-slots">
            <p>Thursday, August 23</p>
            <div className="slot-buttons">
                {times.map((time) => (
                    <button key={time}>{time}</button>
                ))}
            </div>
        </section>
    );
}
