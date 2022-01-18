import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import EventAPI from "../api/EventAPI";

function EventPage() {
  const [event, setEvent] = useState(null);
  const params = useParams();

  useEffect(() => {
    const getEvent = async () => {
      const data = await EventAPI.fetchEvenByID(params.eventID);
      if (data) {
        setEvent(data);
      }
    };

    getEvent();
  }, [params.eventID]);

  const renderEvent = () => {
    if (!event) {
      return null;
    }
    return (
      <div>
        <h3>Title: {event.title}</h3>
        <p>Date: {event.scheduled_date}</p>
        <p>Time: {event.scheduled_time}</p>
        <p>Description: {event.description}</p>
        <hr />
        <Link to={`/events/${event.id}/delete/`}>Delete Event</Link>
      </div>
    );
  };
  return (
    <div>
      <h1>Event Page</h1>
      <hr />
      {renderEvent()}
    </div>
  );
}

export default EventPage;
