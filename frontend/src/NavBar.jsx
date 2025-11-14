import React from "react";
import AdminLogo from "./AdminLogo";
import AdminMenu from "./AdminMenu";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navigation-navbar">
      <div className="nav-container">
        <div className="col-3"><AdminLogo /></div>
        <div className="col-9"><AdminMenu /></div>
      </div>
    </nav>
  );
}

export default NavBar;
