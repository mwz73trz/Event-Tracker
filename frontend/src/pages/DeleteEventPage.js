import EventAPI from "../api/EventAPI";
import { useNavigate, useParams } from "react-router-dom";

function DeleteEvent() {
  const params = useParams();
  const navigate = useNavigate();

  const deleteEvent = async () => {
    const data = await EventAPI.deleteEvent(params.eventID);
    if (data) {
      navigate(`/events`);
    }
  };

  return (
    <div>
      <h1>Delete Event Page</h1>
      <h3>Are you sure you want to delete this event?</h3>
      <button onClick={deleteEvent}>Yes</button>
      <button>No</button>
    </div>
  );
}

export default DeleteEvent;
