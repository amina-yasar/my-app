import React, { useState, useEffect } from "react";
import { donateAPI, getDonorsAPI } from "./api/donateBridge";
import "./AddDonor.css";

function AddDonor() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "",
  });

  const [donorsList, setDonorsList] = useState([]);

  // Fetch donors list
  const fetchDonors = async () => {
    try {
      const res = await getDonorsAPI();
      setDonorsList(res.data);
    } catch (err) {
      console.error("Failed to load donors list", err);
    }
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.amount) {
      alert("Please fill all required fields!");
      return;
    }

    try {
      await donateAPI({ ...form, amount: Number(form.amount) });
      alert("Donor added successfully!");
      setForm({ name: "", email: "", amount: "" });
      fetchDonors(); // reload list instantly
    } catch (err) {
      console.error("Error adding donor:", err);
      alert("Failed to add donor");
    }
  };

  return (
    <div className="donor-list-container">
      <h2 className="donor-list-title">Add Donor</h2>

      <form onSubmit={handleSubmit} className="donor-list-form">
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

        <button type="submit">Save</button>
      </form>

      <hr />

      <h3>Donors List</h3>

      <table className="donor-list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {donorsList.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No donors found
              </td>
            </tr>
          ) : (
            donorsList.map((donor) => (
              <tr key={donor._id}>
                <td>{donor.name}</td>
                <td>{donor.email}</td>
                <td>{donor.amount}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AddDonor;
