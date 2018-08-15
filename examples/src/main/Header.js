import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
  <div className="navbar header">
    <Link to='/'>Home</Link>
    <div className="dropdown">
      <button className="dropbtn">
        Examples 
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
        <Link to='/todo'>Todo</Link>
        <Link to='/weather'>Weather</Link>
      </div>
    </div> 
  </div>
);

export default Header;