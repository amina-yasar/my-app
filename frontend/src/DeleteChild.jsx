import React, { useState, useEffect } from "react";
import { getChildrenAPI, deleteChildAPI } from "./api/childrenBridge";
import "./ChildrenList.css";

function DeleteChild() {
  const [childrenList, setChildrenList] = useState([]);

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

  // Delete a child
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this child?")) return;

    try {
      await deleteChildAPI(id);
      alert("Child deleted successfully");

      // Remove from UI
      setChildrenList((prev) => prev.filter((child) => child._id !== id));
    } catch (err) {
      console.error("Failed to delete child", err);
      alert("Failed to delete child");
    }
  };

  return (
    <div className="children-list-container">
      <h2 className="children-list-title">Delete Child</h2>

      <table className="children-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Action</th>
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
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(child._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DeleteChild;
