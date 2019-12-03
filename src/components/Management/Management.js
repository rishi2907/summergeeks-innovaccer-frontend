import React,{ Component } from 'react';
import './Management.css';
//import { Button,Card } from 'react-bootstrap';
import Card2 from '../Card2/Card2';
import Card1 from '../Card1/Card1';
import Host from '../Host/Host';
import Checkin from '../Checkin/Checkin';
import Checkout from '../Checkout/Checkout';

class Management extends Component{

  constructor(){
    super();
    this.state={
      showForm1 : 0,
      success : "success",
      success1 : "success1",
      success2 :"success2"
    }
  }

  show_form1 = (val)=>{
    this.setState({
      showForm1:val
    })
  }

  hide_form1 = ()=>{
    this.setState({
      showForm1:0
    })
  }

  render(){
    if(this.state.showForm1===0){
      return(<div className='wrapper1'>
        <div className="h1">Welcome To Innovaccer Entry Management System </div><pre></pre>
        <pre></pre>
        <pre></pre>
        <pre></pre>
        <pre></pre>
        <pre></pre>
        <div className="row">

          <div className="col">
            <div className="mx-auto mr-5-md">
              <Card2 show={this.show_form1} hide={this.hide_form1} />
            </div>
          </div>
          <div className="col">
            <div className="ml-5-md">
              <Card1 show={this.show_form1} hide={this.hide_form1} />
            </div>
          </div>
        </div>
      </div>);

    }
    else if(this.state.showForm1===1){
      return(<Host />);
    }else if(this.state.showForm1===2){
      return(<Checkin />);
    }else{
      return(<Checkout />);
    }

  }
}


export default Management;
