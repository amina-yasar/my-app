function Cards() {
  const baseCardData = [
    {
      icon: "bi-house-fill",
      iconColor: "#e67e22", 
      bgColor: "#f9e5d0", 
      title: "Safe Shelter & Warmth",
      text: "Providing a loving and secure home where every child feels safe, cared for, and protected from the hardships of the outside world.",
    },
    {
      icon: "bi-egg-fried",
      iconColor: "#28a745",
      bgColor: "#d4f4dd",
      title: "Nutritious Meals for Growth",
      text: "Ensuring every child receives balanced and healthy meals daily to support their physical growth and overall well-being.",
    },
    {
      icon: "bi-heart-pulse-fill",
      iconColor: "#e74c3c",
      bgColor: "#f9d6d5", 
      title: "Comprehensive Healthcare Support",
      text: "Offering essential medical care and regular health check-ups to keep children strong, healthy, and thriving.",
    },
    {
      icon: "bi-mortarboard-fill",
      iconColor: "#e67e22", 
      bgColor: "#f9e5d0", 
      title: "Quality Education for a Brighter Future",
      text: "Empowering children through access to education, helping them build skills and confidence to create a better tomorrow.",
    },
    {
      title: "About Us",
      text: "We are a passionate team dedicated to innovation and excellence, working tirelessly to deliver outstanding results for our clients.",
    },
    {
      title: "Get Involved",
      text: "Join our mission to bring lasting change. Volunteer, donate, or spread the word — your involvement makes a difference.",
    },
    {
      title: "Gallery",
      text: "Step into our world through images that speak louder than words. See the smiles, progress, and heartfelt moments that define our journey.",
    },
    {
      title: "Our Success",
      text: "Through dedication, compassion, and community support, we’ve transformed lives and built brighter futures.",
    },
  ];

  return (
    <div className="w-100 py-5">
      <div className="px-4">
        <h2
          style={{
            color: "#444", 
            fontStyle: "italic",
            fontWeight: "bold",
            fontFamily: '"Times New Roman", serif',
            fontSize: "4rem",
            textAlign: "center",
            display: "inline-block", 
          }}
        >
          Our Programs
        </h2>

        <div className="row">
          {baseCardData.slice(0, 4).map((card, idx) => (
            <div className="col-md-3 col-sm-6 mb-4" key={idx}>
              <div
                className="card h-100 p-3"
                style={{
                  maxHeight: 250,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: card.bgColor || "#fff", 
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1rem",
                    flexShrink: 0,
                  }}
                >
                  {card.icon && (
                    <div
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        backgroundColor: card.bgColor,
                        border: `2px solid ${card.iconColor}`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "1rem",
                        flexShrink: 0,
                      }}
                    >
                      <i
                        className={`bi ${card.icon}`}
                        style={{ fontSize: "1.8rem", color: card.iconColor }}
                      />
                    </div>
                  )}
                  <h5 className="card-title mb-0">{card.title}</h5>
                </div>
                <p
                  className="card-text"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    flexGrow: 1,
                    marginBottom: "1rem",
                  }}
                >
                  {card.text}
                </p>
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
                    padding: "8px 20px",
                    fontWeight: "600",
                    marginLeft: "auto",
                    whiteSpace: "nowrap",
                    marginRight: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    boxShadow: "0 0 12px 3px rgba(128, 128, 128, 0.7)", // gray glow
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
    </div>
  );
}

export default Cards;
