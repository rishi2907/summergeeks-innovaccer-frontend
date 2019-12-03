import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props =>(

      <header className="toolbar">

        <nav className="toolbar_navigation">
          <div>
            <DrawerToggleButton  click={props.drawerClickHandler }/>
          </div>
          <div className="toolbar_logo"> <a href ="/"> Innovaccer </a></div>
          <div className="spacer"></div>
          <div className="toolbar_navigation-items">
            <ul>
              <li><a href="/"> Home</a></li>
              <li><a href="/"> Current Visitor</a></li>
              <li><a href="/">Visited User</a></li>

            </ul>
          </div>
        </nav>
        </header>
);


export default toolbar;
