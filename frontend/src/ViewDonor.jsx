// ViewDonor.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ViewDonor.css"; // You can reuse your AddDonor/UpdateDonor CSS

const BASE_URL = "http://localhost:5000/api/donate";

function ViewDonor() {
  const [donorsList, setDonorsList] = useState([]);

  // Fetch donors from backend
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

  return (
    <div className="donor-list-container">
      <h2 className="donor-list-title">All Donors</h2>

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

export default ViewDonor;
