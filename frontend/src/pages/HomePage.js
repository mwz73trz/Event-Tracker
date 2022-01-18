import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EventAPI from "../api/EventAPI";
import EventList from "../components/EventList";

function HomePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const data = await EventAPI.fetchEvents();
      if (data) {
        setEvents(data);
      }
    };

    getEvents();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <hr />
      <EventList events={events} />
      <Link to="/events/add">Add Event</Link>
    </div>
  );
}

export default HomePage;
