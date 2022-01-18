import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import EventAPI from "../api/EventAPI";

function AddEventPage() {
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const eventData = {
      title: event.target.elements[0].value,
      scheduled_date: event.target.elements[1].value,
      scheduled_time: event.target.elements[2].value,
      description: event.target.elements[3].value,
    };

    const data = await EventAPI.addEvent(eventData);
    if (data) {
      navigate(`/events/${data.id}`);
    }
  };

  return (
    <div>
      <h1>Add Event Page</h1>
      <hr />
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" placeholder="title" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control name="scheduled_date" placeholder="date (00-00-0000)" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Time</Form.Label>
          <Form.Control name="scheduled_time" placeholder="time (00:00:00)" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" placeholder="description" />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Add Event
        </Button>
      </Form>
    </div>
  );
}

export default AddEventPage;
