import React from "react";

function RegistrationForm() {
  return (
    <div className="container" style={{ maxWidth: "600px", margin: "auto" }}>
      <h2 className="mb-4">Registration Form</h2>
      <form>
        {/* Each form group is a row */}
        <div className="row mb-3 align-items-center">
          <label htmlFor="fullName" className="col-sm-4 col-form-label">
            Full Name
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              id="fullName"
              className="form-control"
              placeholder="Full Name"
            />
          </div>
        </div>

        <div className="row mb-3 align-items-center">
          <label htmlFor="email" className="col-sm-4 col-form-label">
            Email
          </label>
          <div className="col-sm-8">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="row mb-3 align-items-center">
          <label htmlFor="phone" className="col-sm-4 col-form-label">
            Phone Number
          </label>
          <div className="col-sm-8">
            <input
              type="tel"
              id="phone"
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
        </div>

        <div className="row mb-3 align-items-center">
          <label htmlFor="address" className="col-sm-4 col-form-label">
            Address
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              id="address"
              className="form-control"
              placeholder="Address"
            />
          </div>
        </div>

        <div className="row mb-3 align-items-center">
          <label htmlFor="password" className="col-sm-4 col-form-label">
            Password
          </label>
          <div className="col-sm-8">
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="row mb-3 align-items-center">
          <label htmlFor="confirmPassword" className="col-sm-4 col-form-label">
            Confirm Password
          </label>
          <div className="col-sm-8">
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <div className="row mb-4 align-items-center">
          <label htmlFor="role" className="col-sm-4 col-form-label">
            Role
          </label>
          <div className="col-sm-8">
            <select id="role" className="form-select">
              <option value="">-- Select Role --</option>
              <option value="donor">Donor</option>
              <option value="volunteer">Volunteer</option>
              <option value="guardian">Guardian</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="offset-sm-4 col-sm-8">
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "orange",
                color: "white",
                padding: "8px 16px",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
