import React from 'react'
import Header from './Header';
import SideMenu from './SideMenu';

const Layout = props => (
  <div className="grid-container">
    <Header/>
    <SideMenu/>
    {props.children}
  </div>
);

export default Layout;