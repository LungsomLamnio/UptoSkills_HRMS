import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EventListPage from './Event/EventListPage';
import ScheduleFormPage from './Event/ScheduleFormPage';
import ConfirmationPage from './Event/ConfirmationPage';


const Event = () => {
  return (
    <Routes>
      <Route path='/' element={<EventListPage />} />
      <Route path='/schedule' element={<ScheduleFormPage />} />
      <Route path='/confirmation' element={<ConfirmationPage />} />
    </Routes>
  )
}

export default Event;
