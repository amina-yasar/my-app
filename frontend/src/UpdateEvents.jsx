// src/components/UpdateEvent.jsx
import React, { useState, useEffect } from "react";
import { getEventsAPI, updateEventAPI } from "./api/eventsBridge";
import "./UpdateEvents.css"; 

function UpdateEvents() {
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  const [eventsList, setEventsList] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Load all events
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

  // When clicking edit button
  const handleEdit = (ev) => {
    const dt = ev.date ? new Date(ev.date) : null;

    setForm({
      title: ev.title || "",
      date: dt ? dt.toISOString().slice(0, 10) : "",
      time: dt ? dt.toISOString().slice(11, 16) : "",
      location: ev.location || "",
      description: ev.description || "",
    });

    setEditingId(ev._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // UPDATE ONLY — no adding
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!editingId) {
      alert("Please select an event to edit.");
      return;
    }

    if (!form.title || !form.date || !form.location) {
      alert("Please fill Title, Date, and Location");
      return;
    }

    const eventDate = form.time
      ? new Date(`${form.date}T${form.time}`)
      : new Date(form.date);

    try {
      await updateEventAPI(editingId, {
        title: form.title,
        date: eventDate.toISOString(),
        location: form.location,
        description: form.description,
      });

      alert("Event updated successfully!");

      setForm({ title: "", date: "", time: "", location: "", description: "" });
      setEditingId(null);
      fetchEvents();
    } catch (err) {
      console.error("Error updating event:", err);
      alert("Failed to update event");
    }
  };

  return (
    <div className="add-event-container">
      <h2>Update Event</h2>

      <form onSubmit={handleSubmit} className="add-event-form">
        <label>
          Title
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            type="text"
            placeholder="Event Title"
          />
        </label>

        <label>
          Date
          <input
            name="date"
            value={form.date}
            onChange={handleChange}
            type="date"
          />
        </label>

        <label>
          Time (optional)
          <input
            name="time"
            value={form.time}
            onChange={handleChange}
            type="time"
          />
        </label>

        <label>
          Location
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            type="text"
            placeholder="Venue / Location"
          />
        </label>

        <label>
          Description
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Short description"
          />
        </label>

        <div style={{ display: "flex", gap: "0.6rem", justifyContent: "center" }}>
          <button type="submit">Update Event</button>

          {editingId && (
            <button
              type="button"
              onClick={() => {
                setForm({ title: "", date: "", time: "", location: "", description: "" });
                setEditingId(null);
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <hr />

      <h3>Events</h3>

      <table className="events-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date & Time</th>
            <th>Location</th>
            <th>Description</th>
            <th>Edit</th>
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
            eventsList.map((ev) => (
              <tr key={ev._id}>
                <td>{ev.title}</td>
                <td>{ev.date ? new Date(ev.date).toLocaleString() : "-"}</td>
                <td>{ev.location}</td>
                <td>{ev.description}</td>
                <td>
                  <button onClick={() => handleEdit(ev)}>Edit</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UpdateEvents;
