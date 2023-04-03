import React from 'react';
import dates from '../../assets/dates.png';
import './header.css';

const Header = () => {
  return (
    <div className="qke__header section__padding" id="home">
      <div className="qke__header-content">
        
        <h1 className="gradient__text">Milwaukee's first ever city-wide queer art event</h1>

        <p>Join Milwaukee’s leading galleries and art organizations as they display the work of queer artists during Pride Month.</p>

          <div className="qke__header-content__input">
            <input type="email" placeholder='Your Email Address' />
            <button type="button">RSVP</button>
          </div>    
        </div>
        
          <div className="qke__header-image">
            <img src={dates} />
          </div>
      
    </div>
  )
}

export default Header
