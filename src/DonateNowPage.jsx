import React, { useState } from 'react';
import donation from './assets/images/donation.jpg'; // Correct image import
import { BsSuitHeartFill } from 'react-icons/bs'; // Importing the heart icon
import './DonateNowPage.css'; // Import the external CSS file

function DonateNowPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}, for your donation of Rs. ${formData.amount}.`);
    setFormData({ name: '', phone: '', email: '', amount: '' });
  };

  return (
    <div className="donate-now-page container py-5">
      <div className="row">
        {/* Column for the Image */}
        <div className="col-md-6 image-col">
          <img
            src={donation} // Correct image reference
            alt="Donate Now"
            className="donation-image"
          />
          
          {/* Written Content Below the Image */}
          <div className="image-text-content">
            <p className="paragraph-text">
              Every contribution, no matter how big or small, helps provide food, shelter, and education for children in need. 
              Your support can transform lives and create a brighter future. Together, we can make the world a better place for 
              those who need it the most.
            </p>
          </div>
        </div>

        {/* Column for the Donation Form */}
        <div className="col-md-6 form-col">
          <h1 className="donate-header">Donate Now</h1>

          <div className="donate-form">
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
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

              {/* Phone Number Field */}
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

              {/* Email Field */}
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

              {/* Donation Amount Field */}
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

              {/* Donate Now Button with Heart Icon */}
              <button type="submit" className="donate-btn">
                <BsSuitHeartFill className="donate-icon" /> 
                Donate Now
              </button>
            </form>
          </div>

          {/* Disclaimer Section */}
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
