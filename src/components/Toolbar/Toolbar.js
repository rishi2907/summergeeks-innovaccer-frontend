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
              <li><a href="/"> GO Back !!</a></li>
        

            </ul>
          </div>
        </nav>
        </header>
);


export default toolbar;
