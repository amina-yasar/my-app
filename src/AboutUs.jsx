function AboutUs() {
  const iconCircle = (bgColor) => ({
    backgroundColor: bgColor,
    width: "2.8rem",
    height: "2.8rem",
    borderRadius: "50%",
    fontSize: "1.4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const cardData = [
    {
      icon: "👥",
      title: "About Us",
      description:
        "We are a passionate team committed to making a lasting difference in the lives of children.",
    },
    {
      icon: "📜",
      title: "Our History",
      description:
        "Founded over a decade ago, growing from volunteers to a strong community impact organization.",
    },
    {
      icon: "🎯",
      title: "Our Mission",
      description:
        "To provide shelter, education, and care to orphans and homeless children for a brighter future.",
    },
    {
      icon: "🌟",
      title: "Our Vision",
      description:
        "Empowering every child with hope, opportunity, and a chance to thrive in the world.",
    },
  ];

  return (
    <div>
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

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "1rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {cardData.map(({ icon, title, description }) => (
          <div
            key={title}
            style={{
              flex: "1 1 calc(25% - 1rem)",
              minWidth: "250px",
              backgroundColor: "#fff8f0",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              padding: "1.5rem",
              textAlign: "left",
              boxSizing: "border-box",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                  alignItems: "center",
                }}
              >
                <div style={iconCircle("#fde9db")}>{icon}</div>
                <h3
                  style={{
                    fontFamily: '"Times New Roman", serif',
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#d35400",
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
                }}
              >
                {description}
              </p>
            </div>

            <div>
              <a
                href="#"
                type="button"
                className="btn"
                style={{
                  background: "linear-gradient(90deg, #d35400 0%, #e67e22 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  padding: "6px 16px",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  whiteSpace: "nowrap",
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
