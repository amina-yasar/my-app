import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UpdateProfile.css";

const BASE_URL = "http://localhost:5000/api";

function UpdateProfile() {
  const [staff, setStaff] = useState(null);
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    address: "",
    role: "",
    phone: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Get token from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const token = storedUser?.token;

  useEffect(() => {
    if (!token) {
      setError("User not logged in.");
      setLoading(false);
      return;
    }

    const config = { headers: { Authorization: `Bearer ${token}` } };

    axios
      .get(`${BASE_URL}/staff/profile`, config)
      .then((res) => {
        setStaff(res.data);
        setForm(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load profile");
        setLoading(false);
      });
  }, [token]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const config = { headers: { Authorization: `Bearer ${token}` } };

      const res = await axios.put(
        `${BASE_URL}/staff/profile/${staff._id}`,
        form,
        config
      );

      // Preserve token while updating localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({ ...res.data, token })
      );

      setStaff(res.data);
      setForm(res.data);
      setIsEditing(false);
      alert("Profile updated successfully!");
      
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="staff-list-container">
      <h2 className="staff-list-title">My Profile</h2>

      {!isEditing ? (
        <>
          <table className="staff-list-table">
            <tbody>
              <tr>
                <th>Full Name</th>
                <td>{staff.fullname}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{staff.email}</td>
              </tr>
               <tr>
                <th>Password</th>
                <td>{staff.plainPassword}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{staff.phone}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>{staff.address}</td>
              </tr>
              <tr>
                <th>Role</th>
                <td>{staff.role}</td>
              </tr>
            </tbody>
          </table>
          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit Profile
          </button>
        </>
      ) : (
        <form onSubmit={handleUpdate} className="update-form">
          <h3>Edit Profile</h3>
          {["fullname", "email", "password", "address", "role", "phone"].map(
            (field) => (
              <div key={field} className="form-group">
                <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  type={field === "password" ? "password" : "text"}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                />
              </div>
            )
          )}
          <div className="form-buttons">
            <button type="submit">Save Changes</button>
            <button type="button" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default UpdateProfile;
