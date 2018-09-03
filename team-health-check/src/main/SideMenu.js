import React from 'react'
import {Link} from 'react-router-dom';

const SideMenu = () => (
  <div className='side-menu'>
    <ul>
      <li><Link to='/survey/section-one'>Section One</Link></li>
      <li><Link to='/survey/section-two'>Section Two</Link></li>
    </ul>
  </div>
);

export default SideMenu;