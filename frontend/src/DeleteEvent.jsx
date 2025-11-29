import React, { useState, useEffect } from "react";
import { getEventsAPI, deleteEventAPI } from "./api/eventsBridge";
import "./DeleteEvent.css";

function DeleteEvent() {
  const [eventsList, setEventsList] = useState([]);

  // Load all events
  const fetchEvents = async () => {
    try {
      const res = await getEventsAPI();
      setEventsList(res.data);
    } catch (err) {
      console.error("Error loading events", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Delete function
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;

    try {
      await deleteEventAPI(id);
      alert("Event deleted successfully!");
      fetchEvents();
    } catch (err) {
      console.error("Error deleting event", err);
      alert("Could not delete event");
    }
  };

  return (
    <div className="delete-event-container">
      <h2>Delete Event</h2>

      <table className="delete-events-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date & Time</th>
            <th>Location</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {eventsList.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No events found.
              </td>
            </tr>
          ) : (
            eventsList.map((ev) => (
              <tr key={ev._id}>
                <td>{ev.title}</td>
                <td>{ev.date ? new Date(ev.date).toLocaleString() : "-"}</td>
                <td>{ev.location}</td>
                <td>{ev.description}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(ev._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DeleteEvent;
