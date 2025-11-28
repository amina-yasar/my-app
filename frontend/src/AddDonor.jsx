import React, { useState } from "react";
import { donateAPI } from "./api/donateBridge"; // API bridge
import "./DonorList.css";

function AddDonor() {
  const [donor, setDonor] = useState({
    name: "",
    email: "",
    amount: "",
  });

  const handleChange = (e) => {
    setDonor({ ...donor, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    if (!donor.name || !donor.amount) {
      alert("Name and amount are required!");
      return;
    }

    try {
      const res = await donateAPI(donor);
      console.log("Backend response:", res.data);
      alert("Donor added successfully!");
      setDonor({ name: "", email: "", amount: "" }); // Clear form
    } catch (err) {
      console.error("Error adding donor:", err);
      alert("Failed to add donor.");
    }
  };

  return (
    <div className="add-donor-container">
      <h2 className="donor-list-title">Add Donor</h2>
      <div className="add-donor-form">
        <input
          type="text"
          name="name"
          placeholder="Donor Name"
          value={donor.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={donor.email}
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={donor.amount}
          onChange={handleChange}
        />
      </div>

      <div className="save-button-container">
        <button className="save-btn" onClick={handleAdd}>
          Add Donor
        </button>
      </div>
    </div>
  );
}

export default AddDonor;
