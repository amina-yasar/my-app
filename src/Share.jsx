import React from "react";
import "./Share.css";

function Share() {
  return (
    <div className="share-container">
      {/* Main Title */}
      <h1 className="share-heading">Our Story</h1>

      {/* Main Story Text */}
      <p className="share-text">
        Our journey began with a simple yet powerful belief: Every child deserves the chance to
        reach their fullest potential. From humble beginnings, we've worked tirelessly to create
        a supportive and nurturing environment where children from all walks of life can thrive.
        Over the years, we've impacted thousands of lives, and we’re proud to see the positive
        changes we’ve made together with the help of our partners, volunteers, and supporters.
        Through storytelling, we inspire others to join the mission and make a difference.
      </p>

      {/* Share Our Voice Section */}
      <h2 className="share-subheading">Share Our Voice</h2>
      <p className="share-subtext">
        Your stories have the power to spark change. By sharing your experience, you help us
        amplify our message and reach more people who are ready to make an impact. Whether it's a
        personal story of overcoming challenges, or a reflection on the difference our work has
        made in your life, every voice counts. When you share, you become part of a larger
        movement that brings people together to support children in need and ensure a brighter
        future for all.
      </p>
    </div>
  );
}

export default Share;
