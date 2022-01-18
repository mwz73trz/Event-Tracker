const BASE_URL = "http://localhost:8000/api/events/";

const tryCatchFetch = async (url, init = null) => {
  try {
    const response = await fetch(url, init);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(
        `Bad response: ${response.status} ${response.statusText}`
      );
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

const fetchEvents = async () => {
  const url = BASE_URL;
  return await tryCatchFetch(url);
};

const fetchEvenByID = async (eventID) => {
  const url = BASE_URL + `${eventID}/`;
  return await tryCatchFetch(url);
};

const addEvent = async (eventObject) => {
  const url = BASE_URL;
  const init = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventObject),
  };
  return await tryCatchFetch(url, init);
};

const deleteEvent = async (eventID) => {
  const url = BASE_URL + `${eventID}/`;
  const eventObject = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await tryCatchFetch(url, eventObject);
};

const myExports = {
  fetchEvents,
  fetchEvenByID,
  addEvent,
  deleteEvent,
};

export default myExports;
