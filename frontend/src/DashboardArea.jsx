import React, { useState, useEffect } from "react";
import {
  getChildrenCountAPI,
  getStaffCountAPI,
  getDonationsTotalAPI,
  getEventsCountAPI,
} from "./api/dashboardBridge"; // Make sure your API functions exist
import "./DashboardArea.css";

function DashboardArea() {
  // State for counts
  const [counts, setCounts] = useState({
    children: 0,
    staff: 0,
    donations: 0,
    events: 0,
  });

  // Fetch all counts from API
  const fetchCounts = async () => {
    try {
      const [childrenRes, staffRes, donationsRes, eventsRes] = await Promise.all([
        getChildrenCountAPI(),
        getStaffCountAPI(),
        getDonationsTotalAPI(),
        getEventsCountAPI(),
      ]);

      setCounts({
        children: childrenRes.data.count,
        staff: staffRes.data.count,
        donations: donationsRes.data.total, // e.g., sum of donations
        events: eventsRes.data.count,
      });
    } catch (err) {
      console.error("Failed to fetch dashboard counts", err);
    }
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  // Define cards with dynamic values
  const cards = [
    { title: "Total Children", value: counts.children },
    { title: "Total Staff", value: counts.staff },
    { title: "Total Donations", value: `$ ${counts.donations}` },
    { title: "Upcoming Events", value: counts.events },
  ];

  return (
    <div className="main-content">
      <div className="stats-cards">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <h3>{card.title}</h3>
            <p>{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardArea;
