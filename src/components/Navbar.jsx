import React from 'react';
import profile from '../assets/1000065735.jpg';
import logo from '../assets/logo.jpeg'

const Navbar = () => {
  const items = [
    { name: 'Dashboard', icon: 'bi-speedometer2' },
    { name: 'Chat', icon: 'bi-chat-dots' },
    { name: 'Employees', icon: 'bi-people' },
    { name: 'Feed', icon: 'bi-newspaper' },
    { name: 'Recognition', icon: 'bi-award' },
    { name: 'Event', icon: 'bi-calendar-event' },
    { name: 'Profile', icon: 'bi-person' },
    { name: 'Settings', icon: 'bi-gear' }
  ];

  return (
    <div className="sidebar d-flex flex-column text-white bg-primary vh-100 p-3" style={{ width: '250px' }}>
      <div className="text-center mb-4">
        <img src={logo} alt="HRMS Logo" className="mb-3" style={{ width: '100px' }} />
        <br />
        <img
          src={profile}
          alt="Profile"
          className="rounded-circle mb-2"
          style={{ width: '60px', height: '60px', objectFit: 'cover' }}
        />
        <h6 className="fw-bold mb-0">Maria</h6>
        <small>HR Manager</small>
      </div>

      <div className="nav-links mt-3">
        {items.map((item) => (
          <div
            key={item.name}
            className={`py-2 px-3 mb-1 rounded d-flex align-items-center ${item.name === 'Event' ? 'bg-light text-dark fw-bold' : 'text-white'}`}
            style={{ cursor: 'pointer' }}
          >
            <i className={`bi ${item.icon} me-2`}></i>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
