import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => (
  <div className="navbar header">
    <Link to='/'>Home</Link>
    <div className="dropdown">
      <button className="dropbtn">
        Sections
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
        <Link to='/survey/section-one'>Section One</Link>
        <Link to='/survey/section-two'>Section Two</Link>
        <Link to='/survey/section-three'>Section Three</Link>
      </div>
    </div> 
  </div>
);

export default Navbar;