import React, { useEffect, useState } from "react";
import { getAdminProfileAPI } from "./api/staffBridge";
import "./AdminProfile.css";

const AdminProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getAdminProfileAPI();
        setProfile(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="admin-profile-container">
      <h2>Admin Profile</h2>
      {profile && (
        <div className="profile-card">
          <p><strong>Full Name:</strong> {profile.fullname}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Role:</strong> {profile.role}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
          <p><strong>Address:</strong> {profile.address}</p>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
