import React,{ Component } from 'react';
import './Card1.css';
import { Button,Card } from 'react-bootstrap';

const divStyle = {
    backgroundColor: 'white'
};

class Card1 extends Component{

  handle_click1 = (event)=>{
    event.preventDefault();
    this.props.show(2);
  }
  handle_click2 = (event)=>{
    event.preventDefault();
    this.props.show(3);
  }



  render(){

    return(
      <div>
      <Card style={{ width: '18rem' }}>

      <Card.Body>
      <Card.Title><center>Visitor</center></Card.Title>
      <Card.Text>
      <center>For Visitor Checkin And Checkout</center>
      </Card.Text>
      <Button onClick={this.handle_click1}> checkin</Button>
      <Button style={divStyle} onClick={this.handle_click2}>checkout</Button>
      </Card.Body>
      </Card>
      </div>

    );
  }
}


export default Card1;
