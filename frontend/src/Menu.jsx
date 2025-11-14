import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu d-flex align-items-center">
      <ul className="navbar-nav d-flex flex-row align-items-center mb-0">
        <li className="nav-item"><a className="nav-link" href="#">Home</a></li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">About Us</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Our Team</a></li>
            <li><a className="dropdown-item" href="#">Our History</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Vision</a></li>
            <li><a className="dropdown-item" href="#">Our Mission</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Our Programs</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Shelter</a></li>
            <li><a className="dropdown-item" href="#">Nutrition</a></li>
            <li><a className="dropdown-item" href="#">Health</a></li>
            <li><a className="dropdown-item" href="#">Education</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Get Involved</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Volunteers</a></li>
            <li><a className="dropdown-item" href="#">Partner</a></li>
            <li><a className="dropdown-item" href="#">Fundraise</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Gallery</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Images</a></li>
            <li><a className="dropdown-item" href="#">Videos</a></li>
          </ul>
        </li>

        <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
      </ul>

      <form className="d-flex me-2" role="search">
        <input className="form-control ms-3" type="search" placeholder="Search" />
        <button className="btn search-btn" type="submit">Search</button>
      </form>

      <Link to="/donate">
        <button className="btn donate-btn">
          <i className="bi bi-heart-fill"></i> Donate Now
        </button>
      </Link>
    </div>
  );
}

export default Menu;
