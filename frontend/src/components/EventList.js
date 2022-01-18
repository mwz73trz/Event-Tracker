import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function EventList(props) {
  const renderEvents = () => {
    if (!props.events) {
      return null;
    }

    return props.events.map((event, index) => {
      return (
        <tr key={index}>
          <td>
            <Link to={`${event.id}/`}>{event.title}</Link>
          </td>
          <td>{event.scheduled_date}</td>
          <td>{event.scheduled_time}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>{renderEvents()}</tbody>
      </Table>
    </div>
  );
}

export default EventList;
