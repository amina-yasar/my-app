import React from "react";
import AboutUsPic from "./assets/images/AboutUsPic.png";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us-container">

      <div className="left-content">
        <h1>Who We Are</h1>

        <section>
          <p>
            At Hope Haven Orphanage Community, compassion meets commitment.
            Founded to provide a loving and supportive home for orphaned and
            adopted children, we are dedicated to meeting their fundamental
            needs with care and kindness. More than just an organization, we
            create a nurturing environment where every child is empowered to
            grow, learn, and thrive. Our mission goes beyond charity — we
            strive to nurture, educate, and uplift every child who comes
            through our doors.
          </p>
        </section>

        <section>
          <h2>About Us</h2>
          <p>
            Hope Haven Orphanage Community is a beacon of hope and kindness
            that transcends all cultural, religious, and social boundaries. We
            are deeply committed to preserving the dignity and well-being of
            every child under our care. Our founders and team have devoted
            themselves to serving vulnerable children with love and
            dedication, continuing a legacy of selfless service to the
            community.
          </p>
        </section>
      </div>
      <div className="right-image">
        <img
          src={AboutUsPic}
          alt="Hope Haven Orphanage Community"
        />
      </div>
    </div>
  );
}

export default AboutUs;
