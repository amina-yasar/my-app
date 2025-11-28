import React, { useState, useEffect } from "react";
import { getChildrenAPI, addChildAPI } from "./api/childrenBridge";
import axios from "axios";
import "./ChildrenList.css";

const BASE_URL = "http://localhost:5000/api/children"; // backend endpoint

function UpdateChild() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const [childrenList, setChildrenList] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Fetch all children
  const fetchChildren = async () => {
    try {
      const res = await getChildrenAPI();
      setChildrenList(res.data);
    } catch (err) {
      console.error("Failed to load children list", err);
    }
  };

  useEffect(() => {
    fetchChildren();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Edit button click
  const handleEdit = (child) => {
    setForm({ name: child.name, age: child.age, gender: child.gender });
    setEditingId(child._id);
  };

  // Handle form submit (update child)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.age || !form.gender) {
      alert("Please fill all fields");
      return;
    }

    try {
      if (editingId) {
        // Update existing child
        await axios.put(`${BASE_URL}/${editingId}`, {
          name: form.name,
          age: Number(form.age),
          gender: form.gender,
        });
        alert("Child updated successfully!");
      } else {
        // Add new child
        await addChildAPI({ ...form, age: Number(form.age) });
        alert("Child added successfully!");
      }

      setForm({ name: "", age: "", gender: "" });
      setEditingId(null);
      fetchChildren(); // refresh list
    } catch (err) {
      console.error("Failed to save child", err);
      alert("Failed to save child");
    }
  };

  return (
    <div className="children-list-container">
      <h2 className="children-list-title">{editingId ? "Update Child" : "Add Child"}</h2>

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

        <button type="submit">{editingId ? "Update Child" : "Save"}</button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setForm({ name: "", age: "", gender: "" });
              setEditingId(null);
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <hr />

      <h3>Children List</h3>

      <table className="children-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {childrenList.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No children found
              </td>
            </tr>
          ) : (
            childrenList.map((child) => (
              <tr key={child._id}>
                <td>{child.name}</td>
                <td>{child.age}</td>
                <td>{child.gender}</td>
                <td>
                  <button onClick={() => handleEdit(child)}>Edit</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UpdateChild;
