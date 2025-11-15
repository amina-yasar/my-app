import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "./DashboardArea.css";

function DashboardArea() {
  // Define cards with title, value, and route
  const cards = [
    { title: "Total Children", value: 120, route: "/admin/children-list" },
    { title: "Total Staff", value: 25, route: "/admin/administration-list" },
    { title: "Total Donations", value: "$ 1,50,000", route: "/admin/donor-list" },
    { title: "Upcoming Events", value: 3, route: "/admin/upcoming-events" },
  ];

  return (
    <div className="main-content">
      <div className="stats-cards">
        {cards.map((card, index) => (
          <Link
            key={index}
            to={card.route}            // Link to the route
            className="card"           // Keep existing card styling
            style={{ textDecoration: "none", color: "inherit" }} // remove default link style
          >
            <h3>{card.title}</h3>
            <p>{card.value}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DashboardArea;
