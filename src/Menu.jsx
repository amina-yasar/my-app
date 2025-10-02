function Menu() {
  return (
    <>
      <nav
        className="navbar navbar-dark"
        style={{
          backgroundColor: "var(--bs-tertiary-color)",
          minHeight: "70px",
          padding: "0.5rem 1rem",
          height: "100%",
        }}
      >
        <div
          className="container d-flex align-items-center justify-content-between flex-wrap"
          style={{ height: "100%" }}
        >
          <ul
            className="navbar-nav d-flex flex-row flex-wrap align-items-center mb-0"
            style={{
              listStyle: "none",
              gap: "1rem",
              flexGrow: 1,
              marginBottom: 0,
            }}
          >
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                About Us
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Our Team
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Our History
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Vision
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Our Mission
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Our Programs
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Shelter
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Nutrition
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Health
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Education
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Get Involved
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Volunteers
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Partner
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Fundraise
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Gallery
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Images
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Videos
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Contact Us
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="btn"
            style={{
              background: "linear-gradient(90deg, #d35400 0%, #e67e22 100%)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              padding: "12px 30px",
              fontWeight: "600",
              whiteSpace: "nowrap",
              marginLeft: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 0 12px 3px rgba(128, 128, 128, 0.7)",
              cursor: "pointer",
              height: "40px",
            }}
          >
            <i
              className="bi bi-heart-fill"
              style={{
                color: "#e67e22",
                fontSize: "1.5rem",
                textShadow:
                  `-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white`,
              }}
            ></i>
            Donate Now
          </button>
        </div>
      </nav>
    </>
  );
}

export default Menu;
