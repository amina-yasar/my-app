function GetInvolved() {
  const cardData = [
    {
      icon: (
        <div
          style={{
            backgroundColor: "#fde9db",
            width: "2.8rem",
            height: "2.8rem",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d35400"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 14s1-1 2-1 2 1 3 1 2-1 3-1 2 1 3 1 2-1 3-1 2 1 2 1" />
            <path d="M4 10s1-1 2-1 2 1 3 1 2-1 3-1 2 1 3 1 2-1 3-1 2 1 2 1" />
          </svg>
        </div>
      ),
      title: "Partners",
      description:
        "We believe in the power of collaboration. Partnering with us allows organizations to leverage their resources and networks to create measurable and lasting change in the lives of vulnerable children.",
      buttonLabel: "Take Part",
    },
    {
      icon: (
        <div
          style={{
            backgroundColor: "#e6f0ff",
            width: "2.8rem",
            height: "2.8rem",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#007bff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
      ),
      title: "Volunteers",
      description:
        "Our volunteers are the heartbeat of our mission. Whether it's a few hours a week or leading a project, your dedication helps shape the future of the children we serve.",
      buttonLabel: "Join Us",
    },
    {
      icon: (
        <div
          style={{
            backgroundColor: "#ffe6e6",
            width: "2.8rem",
            height: "2.8rem",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#e74c3c"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>
      ),
      title: "Fundraise",
      description:
        "Fundraising is a powerful way to contribute. Host events or share our cause to help us raise the resources needed to support children in need.",
      buttonLabel: "Make Donation",
    },
  ];

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        margin: "2rem 0",
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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "1000px",
          width: "100%",
          gap: "2rem",
          marginLeft: "10rem",
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
