import React from "react";
import { Link } from 'react-router-dom';

import { BsSuitHeartFill } from "react-icons/bs";
import picture1 from "./assets/images/picture1.png";
import picture2 from "./assets/images/picture2.png";
import picture3 from "./assets/images/picture3.png";
import picture4 from "./assets/images/picture4.png";
import picture5 from "./assets/images/picture5.png";
import picture6 from "./assets/images/picture6.png";
import pic1 from "./assets/images/pic1.jpg";
import pic2 from "./assets/images/pic2.jpg";
import pic3 from "./assets/images/pic3.jpg";
import "./Background.css"; // Import the CSS file

const slides = [
  {
    firstImage: pic1,
    stackedImages: [picture1, picture2],
    title: "Hope for Every Child",
    description:
      "We provide love, care, and shelter to children who need it most, ensuring they have a safe and nurturing environment to grow and thrive. Through our dedicated programs, we focus on education, health, and emotional support to empower every child’s future. Join us in making a lasting difference and creating a brighter tomorrow for these young lives.",
  },
  {
    firstImage: pic2,
    stackedImages: [picture3, picture4],
    title: "Support And Care",
    description:
      "Your support provides essential shelter and nutritious food to children in need, ensuring they have a safe and loving environment to call home. Along with meals that nourish their bodies, we offer care, education, and emotional support to help every child reach their full potential. Together, we can bring hope, security, and a brighter future to those who need it most.",
  },
  {
    firstImage: pic3,
    stackedImages: [picture5, picture6],
    title: "Join Our Community",
    description:
      "Together, we can create brighter futures and bring hope to countless children in need. By joining our community, you become part of a compassionate family dedicated to making a meaningful difference—offering support, love, and opportunities for growth. Your involvement helps us provide shelter, education, and nourishment, transforming lives and building a better tomorrow for every child. Join us and help spread kindness that lasts a lifetime.",
  },
];

function Background() {
  return (
    <div
      id="customCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <div className="container-fluid">
              <div className="row gx-0 align-items-center">
                {/* Left Images */}
                <div className="col-md-6">
                  <img
                    src={slide.firstImage}
                    alt={`firstImage${index + 1}`}
                    className="first-image"
                  />
                  <div className="stacked-images">
                    {slide.stackedImages.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`stacked${index + 1}-${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right content */}
                <div className="col-md-6 text-start">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                  <Link to="/donate"> <button type="button" className="btn">
                    <BsSuitHeartFill className="BsSuitHeartFill" />
                    Donate Now
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#customCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#customCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Background;
