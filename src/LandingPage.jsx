import Navigation from "./Navigation";
import HeroSection from"./HeroSection";
import Footer from "./Footer";
function LandingPage() {
  return (
    <div className="container-fluid">
      {/* Navigation */}
      <div className="row" >
        <div className="col">
          <Navigation />
        </div>
      </div>

     {/*hero section*/}
      <div className="row" >
        <div className="col">
          <HeroSection />
        </div>
      </div>

      {/* Footer */}
      <div className="row p-3 mb-2 bg-secondary text-white" style={{ border: "1px solid green" }}>
        <div className="col" style={{ textAlign: "center" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
