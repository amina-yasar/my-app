import React, { useState, useEffect } from "react";
import { addChildAPI, getChildrenAPI } from "./api/childrenBridge";
import "./ChildrenList.css";

function AddChild() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const [childrenList, setChildrenList] = useState([]);

  // Fetch children list on component load
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

  // Handling input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.age || !form.gender) {
      alert("Please fill all fields");
      return;
    }

    try {
      await addChildAPI({ ...form, age: Number(form.age) });

      alert("Child Added Successfully!");

      setForm({ name: "", age: "", gender: "" });

      fetchChildren(); // reload list instantly
    } catch (err) {
      console.error("Error adding child:", err);
      alert("Failed to add child");
    }
  };

  return (
    <div className="children-list-container">
      <h2 className="children-list-title">Add Child</h2>

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

        <button type="submit">Save</button>
      </form>

      <hr />

      <h3>Children List</h3>

      <table className="children-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {childrenList.map((child) => (
            <tr key={child._id}>
              <td>{child.name}</td>
              <td>{child.age}</td>
              <td>{child.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddChild;
