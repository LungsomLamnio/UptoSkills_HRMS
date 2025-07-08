import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Boards from './components/Boards';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Boards />} />
      </Routes>
    </>
  );
};

export default App;
