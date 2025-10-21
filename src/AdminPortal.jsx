import React from 'react';
import { Link } from 'react-router-dom'; 
import './AdminPortal.css'; 

function AdminPortal() {
  return (
    <nav className="navbar">
      <h1>Admin Portal</h1>
      <div className="container d-flex align-items-center justify-content-between flex-wrap">

        <ul className="navbar-nav d-flex flex-row flex-wrap align-items-center mb-0">
          <li className="nav-item me-3">
            <Link className="nav-link active" to="/home">
              Home
            </Link>
          </li>

          <li className="nav-item me-3">
            <Link className="nav-link" to="/admin/administration-list">
              Administration List
            </Link>
          </li>

          <li className="nav-item me-3">
            <Link className="nav-link" to="/admin/children-list">
              Children List
            </Link>
          </li>

          <li className="nav-item me-3">
            <Link className="nav-link" to="/admin/donor-list">
              Donor List
            </Link>
          </li>
        </ul>


        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </nav>
  );
}

export default AdminPortal;
