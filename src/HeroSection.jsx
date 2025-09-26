import Background from "./Background";
import Cards from "./Cards";
import Information from "./Information";

function HeroSection() {
  return (
    <>
      {/* Background Image */}
      <div className="row" style={{ width: "100vw", margin: 0 }}>
        <div className="col" style={{ textAlign: "center", padding: 0 }}>
          <Background />
        </div>
      </div>

      {/* Cards Section - moved up */}
      <div
        className="container"
        style={{
          width: "100vw",
          background: "white",
          overflow: "hidden",
          marginTop: "20px", // Adjust this as needed
        }}
      >
        <Cards />
      </div>

      {/* Info Section */}
      <div className="row" style={{ background: "lightgrey", margin: 0 }}>
        <Information />
      </div>
    </>
  );
}

export default HeroSection;
