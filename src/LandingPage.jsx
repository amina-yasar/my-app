import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div
      className="container-fluid d-flex flex-column"
      style={{ minHeight: '100vh', paddingLeft: 0, paddingRight: 0 }}
    >
      {/* Navigation */}
      <div className="row">
        <div className="col">
          <Navigation />
        </div>
      </div>

      {/* Main content grows to fill available space */}
      <div className="row flex-grow-1">
        <div className="col">
          <HeroSection />
        </div>
      </div>

      {/* Footer stays at bottom */}
      <div
        className="row bg-secondary text-white"
        style={{ flexShrink: 0, padding: '1rem 0' }}
      >
        <div className="col text-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
