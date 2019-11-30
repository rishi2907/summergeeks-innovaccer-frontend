import React,{ Component } from 'react';
import './checkout.css';




class Checkout extends Component{

  _errors ={
    email:"",
    id:null
  }


  constructor(){
    super();
    this.state={
      url : "http://localhost:5000",
      hostInfo:"",
      result:"",
      email:"",
      id:null,
    }

  };


  componentDidMount(){
    this._mounted = true;
    console.log(this._mounted);
    fetch(this.state.url+"/visitor/checkin")
    .then(res => res.json())
    .then((result) => {
      console.log(result);
      this.setState({
        result : result,
      })
      if(this._mounted===true) {
        this.setState({
          isLoaded: true,
          hostInfo: result
        },(err)=>{
          console.log(this.state.hostInfo);
        });
      }
    },(error) => {
      if(this._mounted===true) {
        this.setState({
          isLoaded: false,
          error
        });
      }
    }
  )
}

componentWillUnmount(){
  this._mounted = false;
}

handleEmail = (event)=>{
  var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  if (!event.target.value.match(pattern)) {
      this._errors.email = "*Please enter Valid Email ID";
  }else{
      this._errors.email = "";
  }
  this.setState({
      email:event.target.value
  })
}

handleSubmit = (event)=>{

  event.preventDefault();

  for (var i = 0; i < this.state.result.length; i++){
    var obj = this.state.result[i];
    var val = obj.email;
    console.log(val);
    if(val === event.target.value){
        _error.id = obj.id;

    }

  }

  if(this.state.email !=="" && this._errors.email === ""){

    this.setState({
      _formError : ""
    });
    console.log(JSON.stringify({

      email: this.state.email,

    }));


    fetch(this.state.url+ "/visitor/checkout", {
      // mode: 'no-cors',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.id,
        checkOutTime:Date()
      })
    })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
      if(Object.keys(result).length === 0){
        this.setState({
          success: "Error Saving Information Try Again"
        })
      }else{
        this.setState({
          success : "Successfully CheckOut !"
        })
      }
    });
  }else{
    this.setState({
      _formError : "*Enter all fields correctly."
    })
  }

  // if(this.state.id===null){
  //   this._errors.email = "*Please enter CheckIn Email Address  ";
  // }




}




render(){
  return(
    <div className='wrapper'>
    <div className='form-wrapper'>
    <h2>Visitor Checkout</h2>
    <form onSubmit={this.handleSubmit} noValidate >
    <small className="text-danger">{this._errors.email}</small>
    <div className='email'>
    <label htmlFor="email">Please Enter Email </label>
    <input type='email' name='email'  value={this.state.email} onChange={this.handleEmail} />
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
