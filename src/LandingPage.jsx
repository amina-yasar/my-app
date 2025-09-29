import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div
      className="container-fluid d-flex flex-column"
      style={{ minHeight: '100vh', paddingLeft: 0, paddingRight: 0 }}
    >
      <div className="row">
        <div className="col col-md-6">
          <Navigation />
        </div>
      </div>

      <div className="row flex-grow-1">
        <div className="col col-md-6">
          <HeroSection />
        </div>
      </div>

      <div
        className="row bg-secondary text-white"
        style={{ flexShrink: 0, padding: '1rem 0' }}
      >
        <div className="col col-md-6 text-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
