import React from "react";
import shelter from "./assets/images/shelter.jpg";
import food from "./assets/images/food.jpg";
import health from "./assets/images/health.jpg";
import education from "./assets/images/education.jpg";

// Import the CSS file
import './Cards.css';

const programs = [
  {
    title: "Safe Shelter & Warmth",
    description:
      "A loving and secure home environment where every child is cared for and protected from the outside world. Our shelter provides warmth, safety, and stability, ensuring that every child feels loved and supported in their new home. We believe that a safe environment is the first step toward healing and growth.",
    image: shelter,
  },
  {
    title: "Nutritious Meals for Growth",
    description:
      "We provide balanced, healthy meals that are designed to support physical and mental development. Each meal is carefully planned to ensure that the children receive the necessary nutrients for their growth. Our focus is on nourishing not just the body, but also the spirit, by fostering a sense of belonging and care through shared meals.",
    image: food,
  },
  {
    title: "Healthcare Support",
    description:
      "We offer comprehensive healthcare services, including regular check-ups, vaccinations, and medical care to ensure that every child is healthy and strong. Our medical staff works closely with the children to monitor their growth and address any physical or emotional health needs, providing a holistic approach to well-being.",
    image: health,
  },
  {
    title: "Quality Education",
    description:
      "Our education program empowers children by providing access to high-quality education that builds both academic and life skills. We aim to give every child the tools they need to succeed in life — whether that's excelling in school, developing talents, or preparing for a future career. Education is key to breaking the cycle of poverty and offering children the chance for a brighter future.",
    image: education,
  },
];

function Cards() {
  return (
    <div className="cards-container">
      {/* Heading for the section */}
      <h2 className="cards-heading">Our Programs</h2>

      {/* Mapping through the programs */}
      {programs.map((program, i) => (
        <div key={i} className="card-item">
          {/* Left side - Text */}
          <div className="card-text">
            <h3 className="card-title">{program.title}</h3>
            <p className="card-description">{program.description}</p>
          </div>

          {/* Right side - Image */}
          <div className="card-image-container">
            <img
              src={program.image}
              alt={program.title}
              className="card-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
