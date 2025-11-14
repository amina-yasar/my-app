import React from 'react';
import { Link } from 'react-router-dom'; 
import NavBar from "./NavBar";
import MainSection from "./MainSection";
import FooterAdmin from "./FooterAdmin";
import './AdminPortal.css'; 

function AdminPortal() {
  return (
    <div
      className="container-fluid d-flex flex-column"
      style={{ minHeight: '100vh', paddingLeft: 0, paddingRight: 0 }}
    >
      <div className="row">
        <div className="col-12">
          <NavBar />
        </div>
      </div>

      <div className="row flex-grow-1">
        <div className="col-12">
          <MainSection />
        </div>
      </div>

      <div
        className="row"
        style={{ backgroundColor:"rgb(185,14,79)",flexShrink: 0, padding: '1rem 0' }}
      >
        <div className="col-12">
          <FooterAdmin />
        </div>
      </div>
    </div>
  );
}

export default AdminPortal;
