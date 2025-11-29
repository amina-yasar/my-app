// src/components/ViewEvents.jsx
import React, { useState, useEffect } from "react";
import { getEventsAPI } from "./api/eventsBridge";
import "./ViewEvents.css";

function ViewEvents() {
  const [eventsList, setEventsList] = useState([]);

  // Fetch events from backend
  const fetchEvents = async () => {
    try {
      const res = await getEventsAPI();
      setEventsList(res.data);
    } catch (err) {
      console.error("Failed to load events", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="view-event-container">
      <h2>Upcoming Events</h2>

      <table className="view-events-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Title</th>
            <th>Date & Time</th>
            <th>Location</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {eventsList.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No events found
              </td>
            </tr>
          ) : (
            eventsList.map((ev, index) => (
              <tr key={ev._id}>
                <td>{index + 1}</td> {/* Serial number */}
                <td>{ev.title}</td>
                <td>{ev.date ? new Date(ev.date).toLocaleString() : "-"}</td>
                <td>{ev.location}</td>
                <td>{ev.description}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewEvents;
