import React from 'react';
import './SideDrawer.css';

const SideDrawer =props =>{
  let drawerClasses ='side-drawer';
  if(props.show){
    drawerClasses ='side-drawer open';
  }

  return (<nav className={drawerClasses}>
    <ul>
    <li><a href="/"> Go Back !!!</a></li>

    </ul>
  </nav>

)};


export default SideDrawer;
