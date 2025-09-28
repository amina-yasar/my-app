import Background from "./Background";
import AboutUs from "./AboutUs";
import Cards from "./Cards";
import GetInvolved from "./GetInvolved";
import Gallery from "./Gallery";
import Share from "./Share";
import Information from "./Information";

function HeroSection() {
  return (
    <>
      <div style={{ width: "100vw", padding: 0 }}>
        <Background />
      </div>

      <div style={{ backgroundColor: "#fff8f0", width: "100vw", padding: 0 }}>
        <div style={{ width: "100%", margin: 0, padding: 0 }}>
          <AboutUs />
        </div>

        <div
          className="container-fluid"
          style={{ background: "inherit", overflow: "hidden", padding: "0 15px" }}
        >
          <Cards />
        </div>

        <div
          className="container-fluid"
          style={{ background: "inherit", overflow: "hidden", padding: "0 15px" }}
        >
          <GetInvolved />
        </div>

        <div
          className="container-fluid"
          style={{ background: "inherit", overflow: "hidden", padding: "0 15px" }}
        >
          <div className="row" style={{ width: "100%", margin: 0 }}>
            <div className="col-6" style={{ padding: "1rem" }}>
              <Gallery />
            </div>
            <div className="col-6" style={{ padding: "1rem" }}>
              <Share />
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "lightgrey", width: "100vw", margin: 0, padding: 0 }}>
        <Information />
      </div>
    </>
  );
}

export default HeroSection;
