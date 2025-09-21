// Navigation.js
import Logo from "./Logo";
import Menu from "./Menu";

function Navigation() {
  return (
      <div
  className="container-fluid bg-primary navbar-dark"
  style={{
    width: "100vw",
    position: "fixed",
    top: 0,
    zIndex: 9999,
    backgroundColor: "#0d6efd", // same as Bootstrap "bg-primary"
  }}
>

      <div className="row align-items-center">
        {/* Logo takes 2 columns */}
        <div className="col-2">
          <Logo />
        </div>

        {/* Menu takes 10 columns */}
        <div className="col-1 0"style={{height:"100%"}}>
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
