import React, { useState } from 'react';
import profile1 from '../assets/1000065735.jpg'
import profile2 from '../assets/1000065740.jpg'

const Board = () => {

  const times = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  const events = [
    {
      id: 1,
      name: 'Maria',
      title: 'Event title',
      image: profile1
    },
    {
      id: 2,
      name: 'John',
      title: 'Event title',
      image: profile2
    }
  ];

  return (
    <div className="p-4">
        <>
          <h3 className="fw-bold mb-4">Event Listes -</h3>
          <div className="row">
            <div className="col-md-6">
              {events.map(event => (
                <div className="card mb-4" key={event.id}>
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <img src={event.image} alt="avatar" className="avatar-img me-3" style={{ width: 50, height: 50, borderRadius: '50%' }} />
                      <div>
                        <p className="mb-0 text-muted" style={{ fontSize: '14px' }}>Account name</p>
                        <h5 className="card-title mb-0">{event.title}</h5>
                      </div>
                    </div>
                    <ul className="list-unstyled small text-muted">
                      <li>🕒 30 min</li>
                      <li>📄 Web conferencing details provided upon confirmation.</li>
                      <li>📅 19:00 - 19:45, Monday, August 19, 2024</li>
                      <li>🌍 Asia/Yerevan</li>
                    </ul>
                    <button className="btn btn-primary">Join Event</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-md-6">
              <h5 className="mb-3">Select a Date & Time</h5>
              <div className="bg-light p-3 rounded mb-3">
                <p className="mb-1">📅 April 2024 (Calendar UI Placeholder)</p>
                <small className="text-muted">Time zone: 🌍 Central European Time (8:11PM)</small>
              </div>
              <div className="time-buttons mb-4">
                {times.map(time => (
                  <button key={time} className="btn btn-outline-primary me-2 mb-2">{time}</button>
                ))}
              </div>
              <button className="btn btn-primary">Schedule New Event</button>
            </div>
          </div>
        </>
    </div>
  );
};

export default Board;