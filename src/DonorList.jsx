import React from 'react';
import './DonorList.css';

function DonorList() {
  const donors = [
    { id: 1, name: 'Amina', email: 'amina@example.com', amount: 500, date: '2025-01-15' },
    { id: 2, name: 'hiba', email: 'hiba@example.com', amount: 250, date: '2025-02-10' },
    { id: 3, name: 'ghazwah', email: 'ghazwah@example.com', amount: 300, date: '2025-03-05' },
  ];

  return (
    <div className="donor-list-container">
      <h2 className="donor-list-title">Donor List</h2>

      <table className="donor-list-table" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Amount Donated</th>
            <th>Date</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {donors.length === 0 ? (
            <tr>
              <td colSpan="5" className="donor-list-no-records">
                No donor records found.
              </td>
            </tr>
          ) : (
            donors.map((donor) => (
              <tr key={donor.id}>
                <td>{donor.name}</td>
                <td>{donor.email}</td>
                <td>${donor.amount.toFixed(2)}</td>
                <td>{donor.date}</td>
                <td>
                  <a
                    href={`mailto:${donor.email}?subject=Thank you for your donation`}
                    className="contact-link"
                  >
                    Contact
                  </a>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DonorList;
