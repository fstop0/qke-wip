import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Menu = () => {
  <>

  </>
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='qke__navbar'>
      <div className="qke__navbar-links">
        <div className="qke__navbar-links_logo"><img src={logo} alt="logo"/></div>
      </div>
      <div className="qke__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#mission">Mission</a></p>
          <p><a href="#spaces">Spaces</a></p>
          <p><a href="#exhibitions">Exhibitions</a></p>
          <p><a href="#map">Map</a></p>
          <p><a href="#Gallery"></a>Gallery</p>
          {/* <p><a href="#about">About</a></p> */}
      </div>
      <div className="qke__navbar-sign">
        <button type="button">Get in Touch</button>
      </div>
      <div className="qke__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} /> 
        } 
        {toggleMenu && (
          <div className="qke__navbar-menu_container scale-up-center">
            <div className="qke__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#mission">Mission</a></p>
            <p><a href="#spaces">Spaces</a></p>
            <p><a href="#exhibitions">Exhibitions</a></p>
            <p><a href="#map">Map</a></p>
            <p><a href="#Gallery"></a>Gallery</p>
                <div className="qke__navbar-menu_container-links-sign">
                 <button type="button">Get in Touch</button>
                </div> 
            </div>
          </div>
        )}
    </div>
  </div>
  )
}

export default Navbar