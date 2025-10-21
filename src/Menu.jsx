import React from "react";
import { Link } from 'react-router-dom'; 
import './Menu.css'; 

function Menu() {
  return (
    <>
      <nav className="navbar">
        <div className="container d-flex align-items-center justify-content-between flex-wrap">
 
          <ul className="navbar-nav d-flex flex-row flex-wrap align-items-center mb-0">

            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>


            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                About Us
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Our Team</a></li>
                <li><a className="dropdown-item" href="#">Our History</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Vision</a></li>
                <li><a className="dropdown-item" href="#">Our Mission</a></li>
              </ul>
            </li>


            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                Our Programs
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Shelter</a></li>
                <li><a className="dropdown-item" href="#">Nutrition</a></li>
                <li><a className="dropdown-item" href="#">Health</a></li>
                <li><a className="dropdown-item" href="#">Education</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                Get Involved
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Volunteers</a></li>
                <li><a className="dropdown-item" href="#">Partner</a></li>
                <li><a className="dropdown-item" href="#">Fundraise</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                Gallery
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Images</a></li>
                <li><a className="dropdown-item" href="#">Videos</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">
                Contact Us
              </a>
            </li>
          </ul>

          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>


 <Link to="/donate"> <button type="button" className="btn donate-btn">   
    <i className="bi bi-heart-fill"></i> 
    Donate Now
  </button>
</Link>


        </div>
      </nav>
    </>
  );
}

export default Menu;
