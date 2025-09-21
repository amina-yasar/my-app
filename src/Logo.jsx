import orphan from './assets/images/orphan.jpg';

function Logo() {
  return (
    <nav className="navbar bg-light" style={{ height: "60px" }}>
      <div className="container-fluid d-flex align-items-center" style={{ height: "100%" }}>
        <a
          className="navbar-brand d-flex align-items-center"
          href="#"
          style={{ height: "100%", whiteSpace: "normal", textDecoration: "none" }}
        >
          <img
            src={orphan}
            alt="Logo"
            style={{ maxHeight: "48px", width: "auto", objectFit: "contain" }}
          />
          <div style={{ marginLeft: "10px", lineHeight: "1.15" }}>
            <span style={{
              display: "block",
              fontSize: "0.85rem",
              fontFamily: "'Playfair Display', serif",
              fontWeight: "700",
              color: "#2C3E50",
              letterSpacing: "0.5px",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
              userSelect: "none",
            }}>
              Hope lives here
            </span>
            <span style={{
              display: "block",
              fontSize: "0.7rem",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "400",
              color: "#7f8c8d",
              fontStyle: "italic",
              userSelect: "none",
            }}>
              Love is our foundation
            </span>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Logo;
