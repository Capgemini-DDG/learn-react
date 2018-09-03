import React from 'react';
import Navbar from '../Navbar';
import SideMenu from '../SideMenu';

const Layout = props => (
  <div className="grid-container">
    <Navbar/>
    <SideMenu/>
    <div className='main-container'>
      {props.children}
    </div>
  </div>
);

export default Layout;