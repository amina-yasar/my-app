import React, { useState } from 'react';
import './ChildrenList.css';

function ChildrenList() {
  const [children, setChildren] = useState([
    { id: 1, name: 'Ahmad', age: 10, gender: 'Male' },
    { id: 2, name: 'Ayesha', age: 8, gender: 'Female' },
  ]);

  const [form, setForm] = useState({ id: null, name: '', age: '', gender: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.age || !form.gender) {
      alert('Please fill all fields');
      return;
    }

    if (isEditing) {
      setChildren(prev =>
        prev.map(child => (child.id === form.id ? { ...form, age: Number(form.age) } : child))
      );
      setIsEditing(false);
    } else {
      setChildren(prev => [
        ...prev,
        { ...form, id: Date.now(), age: Number(form.age) },
      ]);
    }
    setForm({ id: null, name: '', age: '', gender: '' });
  };

  const handleEdit = (child) => {
    setForm(child);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this child?')) {
      setChildren(prev => prev.filter(child => child.id !== id));
    }
  };

  const handleCancel = () => {
    setForm({ id: null, name: '', age: '', gender: '' });
    setIsEditing(false);
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
            value={form.age}
            onChange={handleChange}
            type="number"
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
          </select>
        </label>

        <button type="submit">{isEditing ? 'Update Child' : 'Add Child'}</button>
        {isEditing && (
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        )}
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
              <td colSpan="5" style={{ textAlign: 'center' }}>
                No children records found.
              </td>
            </tr>
          ) : (
            children.map(child => (
              <tr key={child.id}>
                <td>{child.name}</td>
                <td>{child.age}</td>
                <td>{child.gender}</td>
                <td>
                  <button onClick={() => handleEdit(child)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(child.id)}>Delete</button>
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
