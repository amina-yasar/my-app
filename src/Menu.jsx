function Menu() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "var(--bs-tertiary-color)" }}
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{ display: "flex", alignItems: "center" }}
          >
            <ul
              className="navbar-nav mb-2 mb-lg-0"
              style={{
                margin: "0 auto",
                display: "flex",
                gap: "1rem",
              }}
            >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
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
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
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
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
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
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
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
                <a className="nav-link active" aria-current="page" href="#">
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
                marginLeft: "auto",
                whiteSpace: "nowrap",
                marginRight: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 0 12px 3px rgba(128, 128, 128, 0.7)",
                cursor: "pointer",
              }}
            >
              <i
                className="bi bi-heart-fill"
                style={{
                  color: "#e67e22",
                  fontSize: "1.5rem",
                  textShadow:
                    `-1px -1px 0 white,
                     1px -1px 0 white,
                    -1px 1px 0 white,
                     1px 1px 0 white`,
                }}
              ></i>
              Donate Now
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
