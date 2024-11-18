import React from 'react';
import '../../styles/TourInclusions.css';

const TourInclusions = () => {
  return (
    <div className="tour-inclusions">
      <div className="inclusions-header">
        <span className="inclusions-icon">📋</span>
        Including:
      </div>
      <ul className="inclusions-list">
        {[
          'Private Guide',
          'A/C car',
          'Guest pick up and drop off',
          'Tickets',
          'All Withlocals Tours are Carbon Neutral'
        ].map((item, index) => (
          <li key={index} className="inclusion-item">
            <span className="check-icon">✔</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TourInclusions;
