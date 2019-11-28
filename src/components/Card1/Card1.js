import React,{ Component } from 'react';
import './Card1.css';
import { Button,Card } from 'react-bootstrap';


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
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
      <Card.Title>Visitor</Card.Title>
      <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the cards content.
      </Card.Text>
      <Button variant="primary" onClick={this.handle_click1}> checkin</Button>
      <Button variant="primary" onClick={this.handle_click2}>checkout</Button>
      </Card.Body>
      </Card>
      </div>

    );
  }
}


export default Card1;
