import React,{ Component } from 'react';
import './checkout.css';



class Checkout extends Component{

// async movies(){
//   await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=4344343' + 'd61a2e5')
//     .then((response) => response.json());
//   };


  constructor(){
    super();
    this.state={
      //hostdata : movies,
    }
    //console.log(this.state.hostdata);

  };



  render(){
    return(<div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Visitor Checkout</h2>
          <form onSubmit={this.handleSubmit} noValidate >
            <div className='email'>
              <label htmlFor="email">Please Enter Email </label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
            </div>
            
            <div className='info'>
              <small>Password must be eight characters in length.</small>
            </div>
            <div className='submit'>
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default Checkout ;
