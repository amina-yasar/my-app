import React, { useState } from "react";

function AboutusPage() {
  const [showHistory, setShowHistory] = useState(false);
  const [showVision, setShowVision] = useState(false);
  const [showMission, setShowMission] = useState(false);
  const [showTeam, setShowTeam] = useState(false);

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "orange" }}>About Us</h1>

      <section>
        <h2>Our History</h2>
        <button
          onClick={() => setShowHistory(!showHistory)}
          style={{
            backgroundColor: "orange",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "6px 12px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          {showHistory ? "Hide" : "Show"}
        </button>
        {showHistory && (
          <p>
            Our orphanage was founded in 2005 with the mission to provide a loving
            and safe environment for children in need.
          </p>
        )}
      </section>

      <section>
        <h2>Our Vision</h2>
        <button
          onClick={() => setShowVision(!showVision)}
          style={{
            backgroundColor: "orange",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "6px 12px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          {showVision ? "Hide" : "Show"}
        </button>
        {showVision && (
          <p>
            To create a world where every child feels loved, supported, and
            empowered to reach their full potential.
          </p>
        )}
      </section>

      <section>
        <h2>Our Mission</h2>
        <button
          onClick={() => setShowMission(!showMission)}
          style={{
            backgroundColor: "orange",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "6px 12px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          {showMission ? "Hide" : "Show"}
        </button>
        {showMission && (
          <p>
            To nurture and care for children, helping them grow into confident,
            happy, and successful individuals.
          </p>
        )}
      </section>

      <section>
        <h2>Our Team</h2>
        <button
          onClick={() => setShowTeam(!showTeam)}
          style={{
            backgroundColor: "orange",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "6px 12px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          {showTeam ? "Hide" : "Show"}
        </button>
        {showTeam && (
          <ul>
            <li>Ijlal Khan - Founder</li>
            <li>Sana - Caretaker</li>
            <li>Abdullah - Volunteer Coordinator</li>
          </ul>
        )}
      </section>
    </div>
  );
}

export default AboutusPage;
