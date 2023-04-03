import React from 'react';
import './venue.css';

const Venue = ({ title, text }) => {
  return (
    <div className="qke__venues-container__venue">
      <div className="qke__venues-container__venue-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="qke__venues-container_venue-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Venue