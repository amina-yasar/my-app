import React from 'react';
import LogoOrphanage from './assets/images/LogoOrphanage.png';
import './AdminLogo.css';

function AdminLogo() {
  return (
    <div className="logo d-flex align-items-center">
      <img src={LogoOrphanage} alt="Logo" />
      <div className="logo-text">
        <span>Hope lives here</span>
      </div>
    </div>
  );
}

export default AdminLogo;
