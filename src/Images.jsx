import React from 'react';
import story1 from "./assets/images/story1.jpg";
import story2 from "./assets/images/story2.jpg";
import './Images.css';  // Import the external CSS

function Images() {
  return (
    <div className="images-container">
      {/* First Section: Smaller Image on the Left and Content on the Right */}
      <div className="images-section">
        <div className="image-container">
          <img
            src={story1}
            alt="Orphanage Story"
          />
        </div>

        <div className="content-container">
          <h3>
            A New Beginning for Every Child
          </h3>
          <p>
            At our orphanage, we provide children with a safe and loving environment, where they can experience a sense of belonging and care. 
            Every child deserves a chance at a better future, and we are here to make that possible, one child at a time. 
            Join us in making a real difference in their lives!
          </p>
        </div>
      </div>

      {/* Second Section: Image on the Right and Content on the Left */}
      <div className="images-section">
        {/* Content on the Left */}
        <div className="content-container">
          <h3>
            A Place of Hope and Healing
          </h3>
          <p>
            Our mission is not only to provide shelter, but also to nurture the emotional, educational, and physical well-being of every child. 
            Through care, mentorship, and education, we guide them towards a brighter, hopeful future. 
            Your support can help us offer these children the tools to rise above their challenges and thrive.
          </p>
        </div>

        {/* Image on the Right */}
        <div className="image-container">
          <img
            src={story2}
            alt="Hope for Orphans"
          />
        </div>
      </div>
    </div>
  );
}

export default Images;
