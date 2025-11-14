import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation-navbar">
      <div className="nav-container">
        <Logo />
        <Menu />
      </div>
    </nav>
  );
}

export default Navigation;
