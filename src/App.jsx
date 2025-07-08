import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Chat from './components/Chat';
import Employees from './components/Employees';
import Feed from './components/Feed';
import Recognition from './components/Recognition';
import Event from './components/Event';
import Profile from './components/Profile';
import Settings from './components/Setting';

const App = () => {
  return (
    <div className="d-flex">
      <Navbar />
      <div className="flex-grow-1 p-3">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/recognition" element={<Recognition />} />
          <Route path="/event" element={<Event />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
