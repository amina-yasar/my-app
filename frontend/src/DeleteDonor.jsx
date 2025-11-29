import React, { useState, useEffect } from "react";
import { getDonorsAPI } from "./api/donateBridge"; // fetch all donors
import axios from "axios"; // for delete request
import "./DonorList.css";

function DeleteDonor() {
  const [donorsList, setDonorsList] = useState([]);

  // Fetch all donors
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

  // Delete a donor
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this donor?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/donate/${id}`);
      alert("Donor deleted successfully");

      // Remove from UI
      setDonorsList((prev) => prev.filter((donor) => donor._id !== id));
    } catch (err) {
      console.error("Failed to delete donor", err);
      alert("Failed to delete donor");
    }
  };

  return (
    <div className="donor-list-container">
      <h2 className="donor-list-title">Delete Donor</h2>

      <table className="donor-list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Action</th>
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
                    onClick={() => handleDelete(donor._id)}
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

export default DeleteDonor;
