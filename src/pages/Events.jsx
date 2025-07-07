import React from "react";
import Sidebar from "../components/Sidebar";
import EventItem from "../components/EventItem";
import Calendar from "../components/Calendar";
import TimeZone from "../components/TimeZone";
import ScheduleButton from "../components/ScheduleButton";
import TimeSlots from "../components/TimeSlots";
import "../styles/Events.css";

const Events = () => {
  return (
    <div className="events-container">
      <Sidebar />
      <main className="main">
        <section className="event-list">
          <h2>Event Listes –</h2>
          <EventItem
            imgSrc="https://storage.googleapis.com/a1aa/image/00633103-3d3f-4fcd-92d6-b156b85dfb2e.jpg"
            imgAlt="Blonde Woman"
            border={false}
          />
          <EventItem
            imgSrc="https://storage.googleapis.com/a1aa/image/c8ee5cd3-3a69-47b0-42c4-1bde36fe3226.jpg"
            imgAlt="Man With Beard"
            border={true}
          />
        </section>
        <section className="calendar-section">
          <Calendar />
          <TimeZone />
          <ScheduleButton />
        </section>
        <TimeSlots />
      </main>
    </div>
  );
};

export default Events;
