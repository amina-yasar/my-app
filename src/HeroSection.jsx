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

      <div style={{ backgroundColor: "#d3c0acff", width: "100vw"}}>
        <div style={{ width: "100%"}}>
          <AboutUs />
        </div>

        <div
          className="container-fluid"
          style={{ background: "inherit", overflow: "hidden", padding: "0 15px" }}
        >
          <Cards />
        </div>

        <div
          className="container-fluid "
          style={{ background: "inherit", overflow: "hidden" }}
        >
          <GetInvolved />
        </div>

        <div
          className="container-fluid"
          style={{ background: "inherit", overflow: "hidden", padding: "0 15px" }}
        >
          <div className="row" style={{ width: "100%" }}>
            <div className="col-12 col-md-6" style={{ padding: "1rem" }}>
              <Gallery />
            </div>
            <div className="col-12 col-md-6" style={{ padding: "1rem" }}>
              <Share />
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-3" style={{ background: "#c2bbbbff", width: "100vw", margin: 0, padding: 0 }}>
        <Information />
      </div>
    </>
  );
}

export default HeroSection;
