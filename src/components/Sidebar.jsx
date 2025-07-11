import "../styles/Events.css";
import Photo from "../assets/Photo.jpg";
import Logo from "../assets/HRMS_Logo.png";
import { useState } from "react";

import { BiSolidDashboard } from "react-icons/bi";
import { BsChatDotsFill } from "react-icons/bs";
import {
  FaUsers,
  FaRegNewspaper,
  FaAward,
  FaUser,
  FaCog,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Sidebar() {
  const [activeItems, setActiveItems] = useState("Event");

  const menuItems = [
    { label: "Dashboard", icon: <BiSolidDashboard /> },
    { label: "Chat", icon: <BsChatDotsFill /> },
    { label: "Employees", icon: <FaUsers /> },
    { label: "Feed", icon: <FaRegNewspaper /> },
    { label: "Recognition", icon: <FaAward /> },
    { label: "Event", icon: <FaCalendarAlt /> },
    { label: "Profile", icon: <FaUser /> },
    { label: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={Logo} alt="website-logo" id="hrms-logo" />
      </div>
      <div className="profile text-center d-flex">
        <img src={Photo} alt="profile-photo" id="profile-photo" />
        <div className="profile-details text-white">
          <h5>Lungsom</h5>
          <p>HR Manager</p>
        </div>
      </div>
      <div className="list">
        <nav>
          <ul className="text-white p-0 m-0">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => setActiveItems(item.label)}
                className={activeItems === item.label ? "active-li" : ""}
              >
                <span className="icons">{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
