import React, { useState } from "react";
import { addEventAPI } from './api/eventsBridge'; // backend API
import "./UpcomingEvents.css";

function UpcomingEvents() {
  const [events, setEvents] = useState([
    { id: 1, title: "Charity Fundraiser", date: "2025-12-10" },
    { id: 2, title: "Annual Picnic", date: "2025-12-20" },
  ]);

  const [form, setForm] = useState({ id: "", title: "", date: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddEvent = async () => {
    if (!form.id || !form.title || !form.date) {
      alert("Please fill all fields!");
      return;
    }

    if (events.some((event) => event.id === Number(form.id))) {
      alert("ID already exists!");
      return;
    }

    const newEvent = { id: Number(form.id), title: form.title, date: form.date };
    setEvents([...events, newEvent]);

    // ✅ Send to backend
    try {
      const res = await addEventAPI(newEvent);
      console.log("Backend response:", res.data); // check backend response
    } catch (err) {
      console.error("Error sending event to backend:", err);
    }

    setForm({ id: "", title: "", date: "" });
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="events-page">
      <h1>Upcoming Events</h1>

      <div className="add-event-form">
        <input type="number" name="id" placeholder="Event ID" value={form.id} onChange={handleInputChange} />
        <input type="text" name="title" placeholder="Event Title" value={form.title} onChange={handleInputChange} />
        <input type="date" name="date" value={form.date} onChange={handleInputChange} />
        <button className="donate-btn add-btn" onClick={handleAddEvent}>Add Event</button>
      </div>

      <table className="events-table">
        <thead><tr><th>ID</th><th>Event Title</th><th>Date</th><th>Actions</th></tr></thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.title}</td>
              <td>{event.date}</td>
              <td>
                <button className="donate-btn delete-btn" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UpcomingEvents;
