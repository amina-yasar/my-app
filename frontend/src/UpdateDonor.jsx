import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddDonor.css"; // reuse your existing CSS

const BASE_URL = "http://localhost:5000/api/donate";

function UpdateDonor() {
  const [donorsList, setDonorsList] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "",
  });

  // Fetch donors
  const fetchDonors = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setDonorsList(res.data);
    } catch (err) {
      console.error("Failed to fetch donors:", err);
    }
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Populate form on Edit
  const handleEdit = (donor) => {
    setForm({
      name: donor.name || "",
      email: donor.email || "",
      amount: donor.amount || "",
    });
    setEditingId(donor._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Update donor
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!form.name || !form.amount) {
      alert("Please fill all required fields!");
      return;
    }
    try {
      await axios.put(`${BASE_URL}/${editingId}`, {
        name: form.name,
        email: form.email,
        amount: Number(form.amount),
      });
      alert("Donor updated successfully!");
      setEditingId(null);
      setForm({ name: "", email: "", amount: "" });
      fetchDonors();
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update donor!");
    }
  };

  return (
    <div className="donor-list-container">
      <h2 className="donor-list-title">Update Donor</h2>

      {/* Donors Table */}
      <table className="donor-list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {donorsList.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No donors found
              </td>
            </tr>
          ) : (
            donorsList.map((donor) => (
              <tr key={donor._id}>
                <td>{donor.name}</td>
                <td>{donor.email}</td>
                <td>{donor.amount}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleEdit(donor)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Form */}
      {editingId && (
        <form onSubmit={handleUpdate} className="donor-list-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter donor's name"
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter donor's email"
            />
          </label>

          <label>
            Amount:
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              min="0"
              placeholder="Enter donation amount"
            />
          </label>

          <div className="form-buttons">
            <button type="submit">Update</button>
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setForm({ name: "", email: "", amount: "" });
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default UpdateDonor;
