import React, { useState, useEffect } from "react";
import { getChildrenAPI } from "./api/childrenBridge";
import "./ChildrenList.css";

function ViewChild() {
  const [childrenList, setChildrenList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch children list from API
  const fetchChildren = async () => {
    try {
      const res = await getChildrenAPI();
      setChildrenList(res.data);
    } catch (err) {
      console.error("Failed to load children list", err);
      setChildrenList([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChildren();
  }, []);

  return (
    <div className="children-list-container">
      <h2 className="children-list-title">List of Children</h2>

      {loading ? (
        <p>Loading children...</p>
      ) : childrenList.length === 0 ? (
        <p>No children found.</p>
      ) : (
        <table className="children-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {childrenList.map((child, index) => (
              <tr key={child._id}>
                <td>{index + 1}</td>
                <td>{child.name}</td>
                <td>{child.age}</td>
                <td>{child.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewChild;
