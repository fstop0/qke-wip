import React from 'react';
import './overlay.css';

const Overlay = ({ children, close }) => {
  return (
    <div className="overlay" onClick={close}>
        {children}
    </div>
    );
};

export default Overlay;
