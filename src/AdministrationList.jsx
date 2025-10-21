import React, { useState } from 'react';
import './AdministrationList.css';  // Import the CSS file

function AdministrationList() {
  const [members, setMembers] = useState([
    { id: 1, name: 'sana', email: 'sana@example.com', role: 'Manager' },
    { id: 2, name: 'zara', email: 'zara@example.com', role: 'Coordinator' },
  ]);

  const [form, setForm] = useState({ id: null, name: '', email: '', role: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) {
      alert('Please fill all fields');
      return;
    }

    if (isEditing) {
      setMembers(prev =>
        prev.map(m => (m.id === form.id ? { ...form } : m))
      );
      setIsEditing(false);
    } else {
      setMembers(prev => [
        ...prev,
        { ...form, id: Date.now() },
      ]);
    }
    setForm({ id: null, name: '', email: '', role: '' });
  };

  const handleEdit = (member) => {
    setForm(member);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setForm({ id: null, name: '', email: '', role: '' });
    setIsEditing(false);
  };

  return (
    <div className="admin-list-container">
      <h2 className="admin-list-title">Administration List</h2>

      <form onSubmit={handleSubmit} className="admin-list-form">
        <div>
          <label>
            Name: <br />
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter name"
            />
          </label>
        </div>

        <div>
          <label>
            Email: <br />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter email"
            />
          </label>
        </div>

        <div>
          <label>
            Role: <br />
            <input
              name="role"
              value={form.role}
              onChange={handleChange}
              type="text"
              placeholder="Enter role"
            />
          </label>
        </div>

        <button type="submit">
          {isEditing ? 'Update Member' : 'Add Member'}
        </button>
        {isEditing && (
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        )}
      </form>

      <h3>Members</h3>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {members.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>
                No members found.
              </td>
            </tr>
          ) : (
            members.map((member) => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.role}</td>
                <td>
                  <button onClick={() => handleEdit(member)}>Edit</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdministrationList;
