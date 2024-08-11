import React from 'react';

const Navbar = () => (
  <div className="nav">
    <input type="checkbox" id="menu-toggle" className="menu-toggle" />
    <div className="navbar">
      <a href="/">HOME</a>
      <a href="#band">BAND</a>
      <a href="#tour">TOUR</a>
      <a href="#contact">CONTACT</a>
      <div className="dropdown">
        <button className="dropbtn">MORE <i className="fa fa-caret-down"></i></button>
        <div className="dropdown-content">
          <a href="/" className="dropdown-item">Merchandise</a>
          <a href="/" className="dropdown-item">Extras</a>
          <a href="/" className="dropdown-item">Media</a>
        </div>
      </div>
      <a href="/" className="search-icon"><i className="fa fa-search"></i></a>
    </div>

    {/* Mobile Menu */}
    <div className="mobile-menu">
      <a href="#band">BAND</a>
      <a href="#tour">TOUR</a>
      <a href="#contact">CONTACT</a>
      <a href="/">MERCH</a>
    </div>
  </div>
);

export default Navbar;
