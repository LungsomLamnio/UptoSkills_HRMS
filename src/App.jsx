import { useState } from "react";

const navItems = [
  { name: "Dashboard" },
  { name: "Chat" },
  { name: "Employees" },
  { name: "Feed" },
  { name: "Recognition" },
  { name: "Event" },
  { name: "Profile" },
  { name: "Settings" },
];

function App() {
  const [activePage, setActivePage] = useState("Event");

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "220px",
          backgroundColor: "#6A7ADA",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "1rem",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textAlign: "center",
            borderBottom: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <div>HRMS</div>
          <div style={{ fontSize: "0.8rem", marginTop: "0.25rem" }}>HR Manager</div>
        </div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, flex: 1 }}>
          {navItems.map((item) => (
            <li
              key={item.name}
              onClick={() => setActivePage(item.name)}
              style={{
                padding: "0.8rem 1rem",
                cursor: "pointer",
                backgroundColor: activePage === item.name ? "#8B95E0" : "transparent",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                fontSize: "1rem",
              }}
            >
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#fff",
          padding: "2rem",
          overflowY: "auto",
        }}
      >
        <PageContent activePage={activePage} />
      </div>
    </div>
  );
}

function PageContent({ activePage }) {
  switch (activePage) {
    case "Dashboard":
      return <h1>Dashboard Page</h1>;
    case "Chat":
      return <h1>Chat Page</h1>;
    case "Employees":
      return <h1>Employees Page</h1>;
    case "Feed":
      return <h1>Feed Page</h1>;
    case "Recognition":
      return <h1>Recognition Page</h1>;
    case "Profile":
      return <h1>Profile Page</h1>;
    case "Settings":
      return <h1>Settings Page</h1>;
    case "Event":
    default:
      return (
        <div style={{ display: "flex", gap: "2rem" }}>
          {/* Event Details */}
          <div style={{ flex: 1 }}>
            <h2>Event Title</h2>
            <p><strong>Account name:</strong> Maria</p>
            <p><strong>Date & Time:</strong> 19:00 - 19:45, Monday, August 19, 2024</p>
            <p><strong>Duration:</strong> 30 min</p>
            <p><strong>Timezone:</strong> Asia/Yerevan</p>
            <p>Web conferencing details provided upon confirmation.</p>
          </div>

          {/* Scheduling/Form Placeholder */}
          <div style={{ flex: 1 }}>
            <h2>Fill Your Details Here</h2>
            <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label>Name</label>
                <input type="text" placeholder="Your name" style={inputStyle} />
              </div>
              <div>
                <label>Email</label>
                <input type="email" placeholder="you@example.com" style={inputStyle} />
              </div>
              <button
                type="button"
                style={{
                  backgroundColor: "#4A90E2",
                  color: "#fff",
                  border: "none",
                  padding: "0.75rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      );
  }
}

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  fontSize: "1rem",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

export default App;
