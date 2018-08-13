import React from 'react'
import {Link} from 'react-router-dom';

const SideMenu = () => (
  <div className='side-menu'>
    <ul>
      <li><Link to='/todo'>Todo</Link></li>
      <li>Example Two</li>
      <li>Example Three</li>
    </ul>
  </div>
);

export default SideMenu;