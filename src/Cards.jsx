import shelter from './assets/images/shelter.jpg';
import food from './assets/images/food.jpg';
import health from './assets/images/health.jpg';
import education from './assets/images/education.jpg';
import aboutus from './assets/images/aboutus.jpg';
import getinvolved from './assets/images/getinvolved.jpg';
import gallery from './assets/images/gallery.jpg';
import success from './assets/images/success.jpg';

function Cards() {
  const baseCardData = [
    {
      img: shelter,
      title: "Safe Shelter & Warmth",
      text: "Providing a loving and secure home where every child feels safe, cared for, and protected from the hardships of the outside world.",
    },
    {
      img: food,
      title: "Nutritious Meals for Growth",
      text: "Ensuring every child receives balanced and healthy meals daily to support their physical growth and overall well-being.",
    },
    {
      img: health,
      title: "Comprehensive Healthcare Support",
      text: "Offering essential medical care and regular health check-ups to keep children strong, healthy, and thriving.",
    },
    {
      img: education,
      title: "Quality Education for a Brighter Future",
      text: "Empowering children through access to education, helping them build skills and confidence to create a better tomorrow.",
    },
    {
      img: aboutus,
      title: "About Us",
      text: "We are a passionate team dedicated to innovation and excellence, working tirelessly to deliver outstanding results for our clients.",
    },
    {
      img: getinvolved,
      title: "Get Involved",
      text: "Join our mission to bring lasting change. Volunteer, donate, or spread the word — your involvement makes a difference.",
    },
    {
      img: gallery,
      title: "Gallery",
      text: "Step into our world through images that speak louder than words. See the smiles, progress, and heartfelt moments that define our journey.",
    },
    {
      img: success,
      title: "Our Success",
      text: "Through dedication, compassion, and community support, we’ve transformed lives and built brighter futures.",
    },
  ];

  return (
    <div className="w-100 py-5" style={{ backgroundColor: "#ffffffff" }}>
      <div className="px-4">
        {/* Our Programs */}
        <h2 className="mb-4">Our Programs</h2>
        <div className="row">
          {baseCardData.slice(0, 4).map((card, idx) => (
            <div className="col-md-3 col-sm-6 mb-4" key={idx}>
              <div className="card h-100">
                <img src={card.img} className="card-img-top" alt={card.title} style={{ objectFit: "cover", maxHeight: 180 }} />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                  <a href="#" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* About Us */}
        <h2 className="mt-5 mb-4">About Us</h2>
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="card h-100">
              <img src={aboutus} className="card-img-top" alt="About Us" />
              <div className="card-body">
                <h5 className="card-title">About Us</h5>
                <p className="card-text">{baseCardData[4].text}</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>

        {/* Get Involved */}
        <h2 className="mt-5 mb-4">Get Involved</h2>
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="card h-100">
              <img src={getinvolved} className="card-img-top" alt="Get Involved" />
              <div className="card-body">
                <h5 className="card-title">Get Involved</h5>
                <p className="card-text">{baseCardData[5].text}</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <h2 className="mt-5 mb-4">Gallery</h2>
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="card h-100">
              <img src={gallery} className="card-img-top" alt="Gallery" />
              <div className="card-body">
                <h5 className="card-title">Gallery</h5>
                <p className="card-text">{baseCardData[6].text}</p>
                <a href="#" className="btn btn-primary">View More</a>
              </div>
            </div>
          </div>
        </div>

        {/* Our Success */}
        <h2 className="mt-5 mb-4">Our Success</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card h-100">
              <img src={success} className="card-img-top" alt="Our Success" />
              <div className="card-body">
                <h5 className="card-title">Our Success</h5>
                <p className="card-text">{baseCardData[7].text}</p>
                <a href="#" className="btn btn-primary">See Stories</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Cards;
