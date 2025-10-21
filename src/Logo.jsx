import React from 'react';
import './Logo.css'; 
import LogoOrphanage from './assets/images/LogoOrphanage.png';

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
