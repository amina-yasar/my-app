import TopHeader from "./TopHeader";
import Background from "./Background";
import AboutUs from "./AboutUs";
import Cards from "./Cards";
import GetInvolved from "./GetInvolved";
import DonateNow from "./DonateNow";
import Share from "./Share";
import Images from "./Images";
                        
import Information from "./Information";

function HeroSection() {
  return (
    <>
     <div style={{ width: "100vw", padding: 0,marginTop:"80px" }}>
        <TopHeader />
      </div>
      <div style={{ width: "100vw", padding: 0 }}>
        <Background />
      </div>

      <div style={{ width: "100vw"}}>
        <div style={{ width: "100%"}}>
          <AboutUs />
        </div>

        <div
          className="container-fluid"
            >
          <Cards />
        </div>

        <div
          className="container-fluid "
        >
          <GetInvolved />
        </div>

        <div
          className="container-fluid"
          style={{ background: "inherit", overflow: "hidden", padding: "0 15px" }}
        >
          <div className="row" style={{ width: "100%" }}>
            <div className="col-12 col-md-6" style={{ padding: "1rem" }}>
              <Share />
            </div>
            <div className="col-12 col-md-6" style={{ padding: "1rem" }}>
              <DonateNow />
            </div>
          </div>
        </div>
      </div>
 <div
          className="container-fluid "
        >
          <Images />
        </div>

      <div className="col-lg-4 col-md-3" style={{  width: "100vw", margin: 0, padding: 0 }}>
        <Information />
      </div>
    </>
  );
}

export default HeroSection;
