import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChildrenData.css";

function ChildrenData() {
  const navigate = useNavigate();

  const [children, setChildren] = useState([
    { id: 1, name: "Ali", age: 8, gender: "Male" },
    { id: 2, name: "Ayesha", age: 7, gender: "Female" },
  ]);

  const [form, setForm] = useState({ name: "", age: "", gender: "Male" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddChild = () => {
    if (!form.name || !form.age) return;
    setChildren([...children, { id: Date.now(), ...form }]);
    setForm({ name: "", age: "", gender: "Male" });
  };

  const handleDeleteChild = (id) => {
    setChildren(children.filter((child) => child.id !== id));
  };

  const handleEditChild = (id) => {
    const child = children.find((c) => c.id === id);
    const newName = prompt("Enter new name:", child.name);
    const newAge = prompt("Enter new age:", child.age);
    const newGender = prompt("Enter gender (Male/Female):", child.gender);
    setChildren(
      children.map((c) =>
        c.id === id ? { ...c, name: newName, age: newAge, gender: newGender } : c
      )
    );
  };

  return (
    <div className="children-page">
      <button onClick={() => navigate("/")} className="donate-btn">
        Back to Dashboard
      </button>

      <h1>Children Management</h1>

      <div className="add-child-form">
        <input
          type="text"
          name="name"
          placeholder="Child Name"
          value={form.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleInputChange}
        />
        <select name="gender" value={form.gender} onChange={handleInputChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button className="donate-btn" onClick={handleAddChild}>
          Add Child
        </button>
      </div>

      <table className="children-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {children.map((child) => (
            <tr key={child.id}>
              <td>{child.id}</td>
              <td>{child.name}</td>
              <td>{child.age}</td>
              <td>{child.gender}</td>
              <td>
                <button
                  className="donate-btn edit-btn"
                  onClick={() => handleEditChild(child.id)}
                >
                  Edit
                </button>
                <button
                  className="donate-btn delete-btn"
                  onClick={() => handleDeleteChild(child.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ChildrenData;
