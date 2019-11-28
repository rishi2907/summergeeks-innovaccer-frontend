import React,{ Component } from 'react';
import './checkin.css';



class Checkin extends Component{

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
          <h2>Visitor Registration</h2>
          <form onSubmit={this.handleSubmit} noValidate >
            <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName' onChange={this.handleChange} noValidate />
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
            </div>
            <div className='phone'>
              <label htmlFor="phone">Phone Number </label>
              <input type='text' name='phone' onChange={this.handleChange} noValidate />
            </div>
            <div className='hostName'>
              <label htmlFor="Hostname">Host Name </label>
              <input type='text' name='hostname' onChange={this.handleChange} noValidate />
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


export default Checkin ;
