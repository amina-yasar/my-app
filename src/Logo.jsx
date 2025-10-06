import navLogo from './assets/images/navLogo.png'; // adjust path if needed

function Logo() {
  return (
    <nav className="navbar" style={{backgroundColor: "transparent" }}>
      <div className="container-fluid ">
        <a
          className="navbar-brand d-flex "
          href="#"
          style={{ height: "100%", whiteSpace: "normal", textDecoration: "none" }}
        >
          <img
            src={navLogo}
            alt="Logo"
            style={{
            width: "auto",
              height: "40px",
              objectFit: "contain",
         
            }}
          />

          <div style={{ marginLeft: "10px", lineHeight: "1.15" }}>
            <span
              style={{
                display: "block",
                fontSize: "0.85rem",
                fontFamily: "'Playfair Display', serif",
                fontWeight: "700",
                color: "#2C3E50",
                letterSpacing: "0.5px",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
              }}
            >
              Hope lives here
            </span>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Logo;
