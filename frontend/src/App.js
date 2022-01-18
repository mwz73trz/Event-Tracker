import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import AddEventPage from "./pages/AddEventPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/events/" element={<HomePage />} />
          <Route exact path="/events/:eventID/" element={<EventPage />} />
          <Route exact path="/events/add/" element={<AddEventPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
