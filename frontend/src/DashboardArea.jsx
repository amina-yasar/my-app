import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getChildrenCountAPI,
  getStaffCountAPI,
  getDonationsTotalAPI,
  getEventsCountAPI,
} from "./api/dashboardBridge"; // Create these API functions
import "./DashboardArea.css";

function DashboardArea() {
  const navigate = useNavigate();

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
    { title: "Total Children", value: counts.children, route: "/admin/view-child" },
    { title: "Total Staff", value: counts.staff, route: "/admin/administration-list" },
    { title: "Total Donations", value: `$ ${counts.donations}`, route: "/admin/donor-list" },
    { title: "Upcoming Events", value: counts.events, route: "/admin/upcoming-events" },
  ];

  return (
    <div className="main-content">
      <div className="stats-cards">
        {cards.map((card, index) => (
          <Link
            key={index}
            to={card.route}
            className="card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3>{card.title}</h3>
            <p>{card.value}</p>
          </Link>
        ))}
      </div>

      {/* Back Button */}
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
    </div>
  );
}

export default DashboardArea;
