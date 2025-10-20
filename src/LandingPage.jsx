
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div
      className="container-fluid d-flex flex-column"
      style={{ minHeight: '100vh', paddingLeft: 0, paddingRight: 0 }}
    >
      

      {/* Navigation full width or adjust as needed */}
      <div className="row">
        <div className="col-12">
          <Navigation />
        </div>
      </div>

      {/* Main content (HeroSection) */}
      <div className="row flex-grow-1">
        <div className="col-12">
          <HeroSection />
        </div>
      </div>

      {/* Footer full width */}
      <div
        className="row"
        style={{ backgroundColor:"rgb(185,14,79)",flexShrink: 0, padding: '1rem 0' }}
      >
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
