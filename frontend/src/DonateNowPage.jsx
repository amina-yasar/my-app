import React, { useState } from "react";
import { donateAPI } from "./api/donateBridge"; // Axios bridge
import donation from './assets/images/donation.jpg';
import { BsSuitHeartFill } from "react-icons/bs";
import "./DonateNowPage.css";

function DonateNowPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    try {
      // Send all fields to backend
      const res = await donateAPI({
        name: formData.name,
        phone: formData.phone,   // added phone
        email: formData.email,
        amount: formData.amount
      });
      console.log(res.data); // backend response
      alert(`Thank you, ${formData.name}! Your donation of Rs.${formData.amount} is appreciated.`);
      
      // Clear form
      setFormData({ name: "", phone: "", email: "", amount: "" });
    } catch (err) {
      console.error(err);
      alert("Error calling Donate API");
    }
  };

  return (
    <div className="donate-now-page container py-5">
      <div className="row">
        <div className="col-md-6 image-col">
          <img src={donation} alt="Donate Now" className="donation-image" />
          <div className="image-text-content">
            <p className="paragraph-text">
              Every contribution, no matter how big or small, helps provide food, shelter, and education for children in need. 
              Your support can transform lives and create a brighter future. Together, we can make the world a better place for 
              those who need it the most.
            </p>
          </div>
        </div>

        <div className="col-md-6 form-col">
          <h1 className="donate-header">Donate Now</h1>

          <div className="donate-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="label">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="amount" className="label">Donation Amount (Rs)</label>
                <input
                  type="number"
                  id="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="Enter amount"
                  required
                  className="input"
                />
              </div>

              <button type="submit" className="donate-btn">
                <BsSuitHeartFill className="donate-icon" /> Donate Now
              </button>
            </form>
          </div>

          <div className="donate-disclaimer">
            <p className="disclaimer-text">
              Your donation will help provide a better future for children in need. All payments are securely processed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonateNowPage;
