import React,{ Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Management from './components/Management/Management';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component{

  constructor(){
    super();
    this.state={
      show : 0,
      SideDrawerOpen:false,

}
}

  drawerToggleClickHandler =()=>{
    this.setState((prevstate)=>{
      return {SideDrawerOpen:!prevstate.SideDrawerOpen};
    });
  };

  backdropClickHandler=()=>{
    this.setState({SideDrawerOpen:false});

  };

  render(){

    //let sideDrawer;
    let backdrop;
    if(this.state.SideDrawerOpen){
    //  sideDrawer = <SideDrawer/>;
      backdrop =<Backdrop click={this.backdropClickHandler} />;
    }
    if(this.state.show === 0 ){
      return (
      <div className="App" style={{height :'100%'}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
      <SideDrawer show={this.state.SideDrawerOpen} />
      {backdrop}
      <main style={{marginTop:'50px',background:'blue',height:'92vh'}}>
      <Management / >
      </main>

      </div>
      );
    }

}
}

export default App;
