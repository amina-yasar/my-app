import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

function Navigation() {
  return (
    <div className="container-fluid nav-container">
      <div className="row align-items-center nav-row">
        <div className="col-2 nav-logo-col">
          <Logo />
        </div>
        <div className="col nav-menu-col">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
