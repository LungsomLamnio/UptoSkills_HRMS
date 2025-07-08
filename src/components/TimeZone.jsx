import React from "react";
import "../styles/Events.css";

export default function TimeZone() {
    return (
        <div className="timezone">
            <p className="label">Time zone</p>
            <p>
                <i className="fas fa-globe-americas"></i>
                Central European Time (8:11pm)
                <button>▾</button>
            </p>
        </div>
    );
}
