import React from "react";
import "../styles/Events.css";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="logo">
                <img
                    src="https://storage.googleapis.com/a1aa/image/eb7a55ef-da3f-4596-adbd-075c074a282b.jpg"
                    alt="HRMS Logo"
                    width="120"
                    height="40"
                />
                <p>Human Resource Management System</p>
            </div>

            <div className="profile">
                <img
                    src="https://storage.googleapis.com/a1aa/image/aeb1d5e8-4139-48d5-8940-c819aac76a66.jpg"
                    alt="Maria"
                    className="profile-img"
                />
                <p className="name">Maria</p>
                <p className="role">HR Manager</p>
            </div>

            <nav className="nav bottom">
                <a href="#"><i className="fas fa-th-large"></i> <span>Dashboard</span></a>
                <a href="#"><i className="fas fa-comments"></i> <span>Chat</span></a>               
                <a href="#"><i className="fas fa-id-card-alt"></i> <span>Employees</span></a>
                <a href="#"><i className="fas fa-rss"></i> <span>Feed</span></a>
                <a href="#"><i className="fas fa-trophy"></i> <span>Recognition</span></a>
                <a href="#"><i className="fas fa-calendar-alt"></i> <span>Event</span></a>
                <a href="#"><i className="fas fa-user"></i> <span>Profile</span></a>
                <a href="#"><i className="fas fa-cog"></i> <span>Settings</span></a>
            </nav>
        </aside>
    );
}
