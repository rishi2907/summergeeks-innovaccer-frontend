import React,{ Component } from 'react';
import './Host.css';



class Host extends Component{

  _errors ={
    email:"",
    username:"",
    phoneNumber:"",
    address:""

  }

  constructor(){
    super();
    this.state={
      //url : "http://localhost:5000",
      url:"https://innovaccer.herokuapp.com",
      email : "",
      name : "",
      phoneNumber : "",
      address : "",
      _formError : "",
      success: "",
      result:[]
    }
    //console.log(this.state.hostdata);

  }


  componentDidMount(){
      this._mounted = true;
      console.log(this._mounted);
      fetch(this.state.url+"/host/in")
      .then(res => res.json())
      .then((result) => {
          console.log(result);
          this.setState({
            result : result,
          })

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
        if(this.state.result.length >0)
        for (var i = 0; i < this.state.result.length; i++){
          var obj = this.state.result[i];
          var val = obj.email;
          if(val === event.target.value){
              this._errors.email = "You already registered with this Email";
          }
      }

        this.setState({
            email:event.target.value
        })

  }

  handleName = (event)=>{
      if (!event.target.value.match(/^[a-zA-Z ]*$/)) {
         this._errors.username = "*Please enter alphabet characters only.";
      }else{
         this._errors.username = "";
      }
      this.setState({
          name:event.target.value
      })
  }

  handlePhoneNumber = (event)=>{
      if (!event.target.value.match(/^[0-9]*$/)) {
          this._errors.phoneNumber = "*Please enter Number Only.";
      }else if(event.target.value.length!==10){
          this._errors.phoneNumber = "Mobile Number should be of 10 digit";
      }else{
          this._errors.phoneNumber="";
      }
      this.setState({
          phoneNumber:event.target.value
      })
  }

  handleAddress = (event)=>{
      this.setState({
          address:event.target.value
      })
  }

  handleSubmit = (event)=>{

      event.preventDefault();

      if(this._errors.username===""
          &&this._errors.email===""
          &&this._errors.phoneNumber==="" &&
           this.state.email!=="" && this.state.name!=="" &&
            this.state.phoneNumber!=="" && this.state.address!=="" ){

              this.setState({
                  _formError : ""
              });

      console.log(JSON.stringify({
                  name: this.state.name,
                  email: this.state.email,
                  phone: this.state.phoneNumber,
                  address: this.state.address,
                  time:Date()
              }));

              fetch(this.state.url+ "/host/in", {
                  // mode: 'no-cors',
                  method: 'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      name: this.state.name,
                      email: this.state.email,
                      phone: this.state.phoneNumber,
                      address: this.state.address,
                      time:Date()
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
                        success : "Data Submitted Successfully."
                    })
                  }
              });

            }else{
                    this.setState({
                        _formError : "*Enter all fields correctly."
                    })
                }
  }


  render(){
    return(<div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Host Registration</h2>
            <small className="text-success">{this.state.success}</small>
          <small className="text-danger">{this.state._formError}</small>
          <form onSubmit={this.handleSubmit} noValidate >
          <small className="text-danger">{this._errors.username}</small>
            <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName'  value={this.state.name} onChange={this.handleName} />
            </div>
            <small className="text-danger">{this._errors.email}</small>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email'  value={this.state.email}  onChange={this.handleEmail}  />
            </div>
            <small className="text-danger">{this._errors.phoneNumber}</small>
            <div className='phone'>
              <label htmlFor="phone">Phone Number </label>
              <input type='text' name='phone' value={this.state.phone} onChange={this.handlePhoneNumber} />
            </div>
              <small></small>
            <div className='address'>
              <label htmlFor="address">Office Address </label>
              <input type='text' name='address' value={this.state.address} onChange={this.handleAddress}  />
            </div>
            <div className='info'>
              <small></small>
            </div>
            <div className='submit'>
              <button>Submit</button>

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Host ;
