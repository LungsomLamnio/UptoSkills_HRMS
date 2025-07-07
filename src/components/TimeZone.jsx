import React from "react";
import "../styles/Events.css";

const TimeZone = () => (
    <div className="timezone">
        <p className="label">Time zone</p>
        <p>
            <i className="fas fa-globe-americas"></i>
            Central European Time (8:11pm)
            <button>▾</button>
        </p>
    </div>
);

export default TimeZone;
