import React from 'react';
import { Link } from 'react-router-dom';
import './CardSection.css'; // Import CardSection specific CSS

function CardSection({ cardData }) {
  return (
    <div className="row" style={{ width: '100%' }}>
      {cardData.map(({ title, description }, index) => (
        <div
          key={index}
          className="col-12"
          style={{
            marginBottom: '3rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <div className="card-section">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <Link to="/login">
              <button type="button" className="card-button">
                LogIn
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardSection;
