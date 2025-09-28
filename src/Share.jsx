function Share() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#fff8f0",
        padding: "2rem 1rem",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <h1
        style={{
          fontFamily: '"Times New Roman", serif',
          fontSize: "4rem",
          fontWeight: "bold",
          fontStyle: "italic",
          color: "#444",
          marginBottom: "2rem",
          textAlign: "left",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        Share Our Story
      </h1>

      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "1.5rem",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          textAlign: "left",
          marginLeft: "1rem",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              backgroundColor: "#fde9db",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 0 5px 0 rgba(128, 128, 128, 0.3)",
              flexShrink: 0,
            }}
            aria-label="Share Icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#d35400"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </div>

          <h3
            style={{
              fontFamily: '"Times New Roman", serif',
              fontSize: "1.6rem",
              fontWeight: "bold",
              color: "#d35400",
              margin: 0,
              userSelect: "none",
            }}
          >
            Share Our Voice
          </h3>
        </div>

        <p
          style={{
            fontFamily: '"Times New Roman", serif',
            fontSize: "1rem",
            color: "#333",
            lineHeight: "1.5",
            marginBottom: "1.25rem",
          }}
        >
          Help us spread the word by sharing your experience, stories, and moments. Your voice
          empowers our mission and inspires others to join the cause.
        </p>

        <div style={{ display: "flex", justifyContent: "flex-start", gap: "1rem" }}>
          <button
            type="button"
            style={{
              background: "linear-gradient(90deg, #d35400 0%, #e67e22 100%)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              padding: "8px 20px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 0 12px 3px rgba(128, 128, 128, 0.7)",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Share Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Share;
