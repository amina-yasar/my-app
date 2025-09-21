function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
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
            style={{ display: "flex", alignItems: "center" }} // flex container for centering + button right
          >
            <ul
              className="navbar-nav mb-2 mb-lg-0"
              style={{
                margin: "0 auto",  // centers the ul horizontally
                display: "flex",
                gap: "1rem",       // spacing between menu items
              }}
            >
              {/* Home */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>

              {/* About Us */}
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

              {/* Our Programs */}
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

            {/* Donate Us button */}
            <button
              type="button"
              className="btn btn-warning"
              style={{ marginLeft: "auto", whiteSpace: "nowrap", marginRight: "1rem" }}
            >
              Donate Us
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
