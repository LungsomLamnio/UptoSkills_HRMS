import React from "react";
import Sidebar from "../components/Sidebar";
import EventDetails from "../components/EventDetails";
import EventForm from "../components/EventForm";

export default function Events() {
  return (
    <div className="event-page-wrapper">
      <Sidebar />
      <main className="main">
        <section className="event-main-section">
          <EventDetails />
          {/* <EventForm /> */}
        </section>
      </main>
    </div>

  );
}
