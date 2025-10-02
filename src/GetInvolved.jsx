function GetInvolved() {
  const cardData = [
    {
      icon: "🤝",
      title: "Partners",
      description:
        "We believe in the power of collaboration. Partnering with us allows organizations to leverage their resources and networks to create measurable and lasting change in the lives of vulnerable children.",
      buttonLabel: "Take Part",
    },
    {
      icon: "🙋‍♀️",
      title: "Volunteers",
      description:
        "Our volunteers are the heartbeat of our mission. Whether it's a few hours a week or leading a project, your dedication helps shape the future of the children we serve.",
      buttonLabel: "Join Us",
    },
    {
      icon: "❤️",
      title: "Fundraise",
      description:
        "Fundraising is a powerful way to contribute. Host events or share our cause to help us raise the resources needed to support children in need.",
      buttonLabel: "Make Donation",
    },
  ];

  return (
    <div
      style={{
        
        padding: "0 1rem",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          fontFamily: '"Times New Roman", serif',
          fontSize: "4rem",
          fontWeight: "bold",
          color: "#444",
          marginBottom: "1rem",
          textAlign: "left",
          width: "100%",
          fontStyle: "italic",
        }}
      >
        Get Involved
      </h1>

      <div className="col-md-4 col-lg-12 d-flex"       style={{
        
          maxWidth: "1000px",
          width: "100%",
          gap: "2rem",
          
        }}
      >
        {cardData.map(({ icon, title, description, buttonLabel }) => (
          <div
            key={title}
            style={{
              width: "30%",
              backgroundColor: "#fff8f0",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              padding: "1.5rem",
              textAlign: "left",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.5rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "#fde9db",
                  width: "2.8rem",
                  height: "2.8rem",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.4rem",
                }}
              >
                {icon}
              </div>

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
                margin: "0.5rem 0 1.2rem 0",
              }}
            >
              {description}
            </p>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <a
                href="#"
                type="button"
                className="btn"
                style={{
                  background: "linear-gradient(90deg, #d35400 0%, #e67e22 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  padding: "8px 20px",
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 0 12px 3px rgba(128, 128, 128, 0.7)",
                  cursor: "pointer",
                }}
              >
                {buttonLabel}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetInvolved;
