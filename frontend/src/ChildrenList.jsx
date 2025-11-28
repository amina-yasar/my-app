import React, { useState, useEffect } from "react";
import { getChildrenAPI, addChildAPI } from "./api/childrenBridge";
import "./ChildrenList.css";

function ChildrenList() {
  const [children, setChildren] = useState([]);
  const [form, setForm] = useState({ name: "", age: "", gender: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Fetch children from backend on page load
  useEffect(() => {
    fetchChildren();
  }, []);

  const fetchChildren = async () => {
    try {
      const res = await getChildrenAPI();
      setChildren(res.data); // contains MongoDB _id
    } catch (err) {
      console.error("Error fetching children:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.age || !form.gender) {
      alert("Please fill all fields");
      return;
    }

    try {
      if (isEditing) {
        // For now, let's just console log update
        // You can later implement update API call
        console.log("Update not implemented yet", editingId, form);
        setIsEditing(false);
        setEditingId(null);
      } else {
        await addChildAPI({ ...form, age: Number(form.age) });
      }

      setForm({ name: "", age: "", gender: "" });
      fetchChildren(); // refresh table after add/update
    } catch (err) {
      console.error("Error saving child:", err);
    }
  };

  const handleEdit = (child) => {
    setForm({ name: child.name, age: child.age, gender: child.gender });
    setIsEditing(true);
    setEditingId(child._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this child?")) return;
    try {
      await fetch(`http://localhost:5000/api/children/${id}`, {
        method: "DELETE",
      });
      fetchChildren(); // refresh table after delete
    } catch (err) {
      console.error("Error deleting child:", err);
    }
  };

  const handleCancel = () => {
    setForm({ name: "", age: "", gender: "" });
    setIsEditing(false);
    setEditingId(null);
  };

  return (
    <div className="children-list-container">
      <h2 className="children-list-title">Children List</h2>

      <form onSubmit={handleSubmit} className="children-list-form">
        <label>
          Name:
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter child's name"
          />
        </label>
        <label>
          Age:
          <input
            name="age"
            type="number"
            value={form.age}
            onChange={handleChange}
            min="0"
            placeholder="Enter child's age"
          />
        </label>
        <label>
          Gender:
          <select name="gender" value={form.gender} onChange={handleChange}>
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <button type="submit">{isEditing ? "Update Child" : "Add Child"}</button>
        {isEditing && <button type="button" onClick={handleCancel}>Cancel</button>}
      </form>

      <h3>Children Records</h3>
      <table className="children-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {children.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No children records found.
              </td>
            </tr>
          ) : (
            children.map((child) => (
              <tr key={child._id}>
                <td>{child.name}</td>
                <td>{child.age}</td>
                <td>{child.gender}</td>
                <td>
                  <button onClick={() => handleEdit(child)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(child._id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ChildrenList;
