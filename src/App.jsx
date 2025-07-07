import { Routes, Route } from "react-router-dom";
import Events from "./pages/Events";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Events />} />
      </Routes>
    </>
  );
}
