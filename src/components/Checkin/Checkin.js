import React,{ Component } from 'react';
import './checkin.css';
import { Dropdown } from 'semantic-ui-react'

// const countryOptions = [
//   { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
//   { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
//   { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
//   { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
//   { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
//   { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
//   { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
//   { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
//   { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
//   { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
//   { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
//   { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
//   { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
//   { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
//   { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
//   { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
//   { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
//   { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
//   { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
//   { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
//   { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
//   { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
//   { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
// ]


class Checkin extends Component{



_errors ={
  email:"",
  username:"",
  phoneNumber:"",
  ph:""
}

constructor(){
  super();
  this.state={
    //url : "http://localhost:5000",
    url:"https://innovaccer.herokuapp.com",
   email : "",
   name : "",
   phoneNumber : "",
   hostname:"",

   _formError : "",
   success: "",
   result:[],
   visitor:[],
   hostName:[],
   hostEmail:[],
   hostoption:[],
   host:[]

  }

};

componentDidMount(){
    this._mounted = true;
    console.log(this._mounted);

    fetch(this.state.url+"/host/in")
    .then(res => res.json())
    .then((result) =>

      {//console.log(result);
      for (var i = 0; i < result.length; i++){
        console.log(result);
        var obj = result[i];
        var email = obj.email;
        var name = obj.name;
        var nameEmail = name + "    (" + email + ")";
        console.log(nameEmail);
        var obj1={"value":email,"text":nameEmail};
        //console.log("rishi");
        this.setState({
          host: this.state.host.concat([obj1])
        })
      }
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

    console.log(this.state.result);





    fetch(this.state.url+"/visitor/checkin")
    .then(res => res.json())
    .then((result) => {
        console.log(result);
        this.setState({
          visitor : result,
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

  handleHostName = (event,{value})=>{
      this.setState({
          hostname:value

      })
        console.log(value);
  }
handleSubmit = (event)=>{

      event.preventDefault();


      if(this._errors.username===""
          &&this._errors.email===""
          &&this._errors.phoneNumber==="" &&
           this.state.email!=="" && this.state.name!=="" &&
            this.state.phoneNumber!=="" && this.state.address!==""){

              this.setState({
                  _formError : ""
              });
              console.log(JSON.stringify({
                          name: this.state.name,
                          email: this.state.email,
                          phone: this.state.phoneNumber,
                          //address: this.state.address,
                          hostEmail: this.state.hostname,
                          hostName: this.state.hostname,
                          checkInTime:Date()

                      }));

                      fetch(this.state.url+ "/visitor/checkin", {
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
                            hostName: this.state.hostname,
                            hostEmail: this.state.hostname,
                            checkInTime:Date()
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
                    }
                    else{
                            this.setState({
                                _formError : "Please enter all fields correctly."
                            })
                        }

  }




  render(){
    return(<div className='wrapper1'>
        <div className='form-wrapper1'>
          <h2>Visitor Registration</h2>
          <pre></pre>
          <small className="text-success">{this.state.success}</small>
          <small className="text-danger">{this.state._formError}</small>
          <form onSubmit={this.handleSubmit} noValidate >
          <small className="text-danger">{this._errors.username}</small>
            <div className='fullName'>
              <input type='text' name='fullName' value={this.state.name} onChange={this.handleName}  placeholder="Full Name"/>
            </div>
            <small className="text-danger">{this._errors.email}</small>

            <div className='email'>
              <input type='email' name='email' value={this.state.email} onChange={this.handleEmail} placeholder="Email Address"/>
            </div>
            <small className="text-danger">{this._errors.phoneNumber}</small>

            <div className='phone'>
              <input type='text' name='phone'  value={this.state.phone} onChange={this.handlePhoneNumber}  placeholder="Phone Number"/>
            </div>
            <small className="text-danger">{this._errors.ph}</small>
            <div className='hostName'>
            <Dropdown placeholder='Select Host' fluid search selection options={this.state.host} onChange={this.handleHostName} />

            </div>

            <div className='submit'>
              <button>CheckIn</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default Checkin ;
