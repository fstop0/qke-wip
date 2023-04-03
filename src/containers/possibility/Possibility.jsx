import React from 'react';
import nykoli1 from '../../assets/Var-NykoliKoslow-ThePropheticPerfect-JoshHintz.jpg'
import './possibility.css';

const Possibility = () => {
  return (
    <div className="qke__possibility-header" id="Learn">
      <div className="qke__possibility-image">
        <img src={ nykoli1 } alt="" />
      </div>
      <div className="qke__possibility-content">
        <h1 className="gradient__text">"Queer resists boundaries and refuses to be narrowly defined"</h1>
        <h3>Vince Alleti</h3>
      </div>
    </div>
  )
}

export default Possibility
