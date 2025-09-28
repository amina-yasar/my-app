function AboutUs() {
  // helper to style the icon containers
  const iconCircle = (bgColor) => ({
    backgroundColor: bgColor,
    width: "2.8rem",
    height: "2.8rem",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const cardData = [
    {
      icon: (
        <div style={iconCircle("#fde9db")}>
          {/* people / group icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="#d35400"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx="9" cy="7" r="4" />
            <path d="M17 11c1.5 0 3 1.5 3 3v3" />
            <path d="M6 21v-3a6 6 0 0 1 6-6h2" />
            <circle cx="17" cy="7" r="4" />
          </svg>
        </div>
      ),
      title: "About Us",
      description:
        "We are a passionate team committed to making a lasting difference in the lives of children.",
    },
    {
      icon: (
        <div style={iconCircle("#e9efff")}>
          {/* scroll / history icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="#d35400"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M4 19a4 4 0 0 0 4 4h12" />
            <path d="M20 22a4 4 0 0 0 0-8H8a4 4 0 0 0 0 8h12z" />
            <path d="M4 4h16" />
            <path d="M4 8h16" />
          </svg>
        </div>
      ),
      title: "Our History",
      description:
        "Founded over a decade ago, growing from volunteers to a strong community impact organization.",
    },
    {
      icon: (
        <div style={iconCircle("#fff2cc")}>
          {/* target / mission icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="#d35400"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="12" y1="2" x2="12" y2="6" />
            <line x1="12" y1="18" x2="12" y2="22" />
            <line x1="2" y1="12" x2="6" y2="12" />
            <line x1="18" y1="12" x2="22" y2="12" />
          </svg>
        </div>
      ),
      title: "Our Mission",
      description:
        "To provide shelter, education, and care to orphans and homeless children for a brighter future.",
    },
    {
      icon: (
        <div style={iconCircle("#f3e6ff")}>
          {/* star / vision icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="#d35400"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <polygon points="12 2 15 8.5 22 9.3 17 14 18.5 21 12 17.8 5.5 21 7 14 2 9.3 9 8.5 12 2" />
          </svg>
        </div>
      ),
      title: "Our Vision",
      description:
        "Empowering every child with hope, opportunity, and a chance to thrive in the world.",
    },
  ];

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "2rem 0",
        boxSizing: "border-box",
        padding: "0 1rem",
      }}
    >
      <h1
        style={{
          color: "#444",
          fontStyle: "italic",
          fontWeight: "bold",
          fontFamily: '"Times New Roman", serif',
          fontSize: "5rem",
          margin: "0 0 2rem 0",
          width: "100%",
          textAlign: "left",
        }}
      >
        Who We Are
      </h1>

      {/* Cards Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {cardData.map(({ icon, title, description }) => (
          <div
            key={title}
            style={{
              flex: "1 1 220px",
              backgroundColor: "#fff8f0",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              padding: "1.5rem",
              textAlign: "left",
              minWidth: "220px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                {icon}
                <h3
                  style={{
                    fontFamily: '"Times New Roman", serif',
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#d35400",
                    margin: 0,
                  }}
                >
                  {title}
                </h3>
              </div>

              <p
                style={{
                  fontFamily: '"Times New Roman", serif',
                  fontSize: "1rem",
                  color: "#333",
                  lineHeight: "1.4",
                  margin: 0,
                }}
              >
                {description}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "1rem",
              }}
            >
              <a
                href="#"
                type="button"
                className="btn"
                style={{
                  background:
                    "linear-gradient(90deg, #d35400 0%, #e67e22 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  padding: "6px 16px",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 0 12px 3px rgba(128, 128, 128, 0.7)",
                  cursor: "pointer",
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
