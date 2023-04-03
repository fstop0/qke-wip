import React from 'react'
import "./exhibition.css";

const Exhibition = ({ data, open  }) => {
  const {imageUrl, price, address, numBedroom, numWashroom, livingSpace} = data;

  return (
    <div className="exhibition" onClick={open}>
      <div className="exhibition__content">
        <div className="exhibition__image-container">
          <img 
            className="exhibition__image" 
            src={imageUrl} 
            alt="qke exhibition"
          />
        </div>
        <div className="exhibition__details">
          <div className="exhibition__row">
            <span className="exhibition__title">{price}</span>
          </div>
          <div className="exhibition__row">
            <span className="exhibition__artist">{address}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exhibition;
