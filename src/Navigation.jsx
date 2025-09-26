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
 
  }}>
      <div className="row align-items-center">
        <div className="col-2">
          <Logo />
        </div>
        <div className="col"style={{height:"100%"}}>
          <Menu />
        </div>
      </div>
    </div>
  );
}
export default Navigation;
