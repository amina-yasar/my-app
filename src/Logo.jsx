import React from 'react';
import './Logo.css';  // Import the new CSS file
import LogoOrphanage from './assets/images/LogoOrphanage.png'; // adjust path if needed

function Logo() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand d-flex " href="#">
          <img
            src={LogoOrphanage}
            alt="Logo"
          />
          <div>
            <span>
              Hope lives here
            </span>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Logo;
