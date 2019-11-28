import React,{ Component } from 'react';
import './Card2.css';
import { Button,Card } from 'react-bootstrap';


class Card2 extends Component{

  handle_click = (event)=>{
    event.preventDefault();
    this.props.show(1);
  }

  render(){

    return(
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
      <Card.Title>Host</Card.Title>
      <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the cards content.
      </Card.Text>
      <Button variant="primary" onClick={this.handle_click}>Host !</Button>
      </Card.Body>
      </Card>
      </div>



    );
  }
}


export default Card2;
