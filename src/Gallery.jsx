function Gallery() {
  return (
    <div >
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
        Gallery
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
              backgroundColor: "#fde9dc",
              display: "flex",
              justifyContent: "center",
             
              boxShadow: "0 0 5px 0 rgba(128, 128, 128, 0.3)",
              border: "1px solid #d35400",
              color: "#d35400",
           
              fontSize: "1.5rem",
            }}
          >
            🎞️
          </div>
          <h3
            style={{
              fontFamily: '"Times New Roman", serif',
              fontSize: "1.6rem",
              fontWeight: "bold",
              color: "#d35400",
              margin: 0,
            }}
          >
            Explore Our Moments
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
          Dive into a collection of photos and impactful videos that showcase our journey,
          milestones, and the joy we bring to those we serve.
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
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
              display: "flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 0 12px 3px rgba(128, 128, 128, 0.7)",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Images
          </a>

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
              display: "flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 0 12px 3px rgba(128, 128, 128, 0.7)",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Videos
          </a>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
