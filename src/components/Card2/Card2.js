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

      <Card.Body>
      <Card.Title><center>Host</center></Card.Title>
      <Card.Text>
      <center>For Host Registration</center>
      </Card.Text>
      <Button variant="primary" onClick={this.handle_click}>Host !</Button>
      </Card.Body>
      </Card>
      </div>



    );
  }
}


export default Card2;
