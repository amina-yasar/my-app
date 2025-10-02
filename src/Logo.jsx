function Logo() {
  return (
    <nav className="navbar" style={{ height: "60px", backgroundColor: "transparent" }}>
      <div className="container-fluid " style={{ height: "100%" }}>
        <a
          className="navbar-brand d-flex "
          href="#"
          style={{ height: "100%", whiteSpace: "normal", textDecoration: "none" }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2C3E50"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0 }}
          >
            <path d="M3 11L12 2l9 9" />
            <path d="M21 11v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V11" />
            <path d="M7 22v-7h10v7" />
            <path
              d="M12 17c-1.104-1.324-3-2.072-3-4a2 2 0 0 1 4 0 2 2 0 0 1 4 0c0 1.928-1.896 2.676-3 4z"
              fill="#e74c3c"
              stroke="none"
            />
          </svg>

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
