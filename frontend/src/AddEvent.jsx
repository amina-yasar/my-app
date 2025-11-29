// src/components/AddEvent.jsx
import React, { useState, useEffect } from "react";
import { addEventAPI, getEventsAPI } from "./api/eventsBridge";
import "./AddEvent.css"; // optional, create this if you want styles

function AddEvent() {
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  const [eventsList, setEventsList] = useState([]);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.date || !form.location) {
      alert("Please fill at least Title, Date and Location");
      return;
    }

    // Combine date + time into a single ISO date if time provided
    const eventDate = form.time
      ? new Date(`${form.date}T${form.time}`)
      : new Date(form.date);

    try {
      await addEventAPI({
        title: form.title,
        date: eventDate.toISOString(),
        location: form.location,
        description: form.description,
      });

      alert("Event added successfully!");
      setForm({ title: "", date: "", time: "", location: "", description: "" });
      fetchEvents();
    } catch (err) {
      console.error("Error adding event:", err);
      alert("Failed to add event");
    }
  };

  return (
    <div className="add-event-container">
      <h2>Add Event</h2>

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

        <button type="submit">Add Event</button>
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
          </tr>
        </thead>
        <tbody>
          {eventsList.map((ev) => (
            <tr key={ev._id}>
              <td>{ev.title}</td>
              <td>{new Date(ev.date).toLocaleString()}</td>
              <td>{ev.location}</td>
              <td>{ev.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddEvent;
