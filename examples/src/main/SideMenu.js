import React from 'react'
import {Link} from 'react-router-dom';

const SideMenu = () => (
  <div className='side-menu'>
    <ul>
      <li><Link to='/todo'>Todo</Link></li>
      <li><Link to='/weather'>Weather</Link></li>
      <li><Link to='/worldcoin'>World Coin</Link></li>      
    </ul>
  </div>
);

export default SideMenu;