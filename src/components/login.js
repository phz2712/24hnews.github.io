import React from 'react';
import './Login.css';
import {TextField, InputAdornment, OutlinedInput, } from '@material-ui/core';
import { Visibility, VisibilityOff} from '@material-ui/icons';

class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state={
       warning   : ' ',
       username  : '',
       password  : '',
       warning2  : ' ',
       err1: false,
       err2: false,
       showpassword:true
    }
    this.handleChange       = this.handleChange.bind(this);
    this.Showpass           = this.Showpass.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  Showpass(){
    this.setState({showpassword: !this.state.showpassword})
  }
  componentWillMount(){
    this.setState({
    warning     : this.state.warning,
    username    : this.state.username,
    password    : this.state.password,
    warning2    : this.state.warning2,
    err1        : this.state.err1,
    err2        : this.state.err2,
    showpassword:this.state.showpassword})
  }
  
   handleChange(event) 
   {
        event.preventDefault();
         const target = event.target;
         const value = target.name === 'isGoing' ? target.checked : target.value;
         target.value = target.value.replace(/\s/g, "");
         const name = target.name;
         this.setState({
           [name]: value    });
          
          switch (this.state.username.length){
            case 0:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
             this.setState({warning: " ",err1:false });
            break;
            default:
            this.setState({warning: "Higher 4 letters", err1:true});
            break;
          }
            
        
          console.log(this.state.username)
            
 
          const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_[!@#$%^&*]_)).{3,}$/;
          const lower   = /^(?=.*[a-z]).{0,}$/;
          const upper   = /^(?=.*[A-Z]).{0,}$/;
          const number  = /^(?=.*\d).{0,}$/;
          const special = /^(?=.*(\W|_[!@#$%^&*]_)).{0,}$/;
          console.log(!lower.test(this.state.password))


         if(this.state.password===""){
            this.setState({warning2: " ", err2:false})
           }
          else{ 
            
            if(!lower.test(this.state.password))
             {
              this.setState({warning2: " must be a lower letter", err2:true})
             }
             else if(!upper.test(this.state.password))
             {
              this.setState({warning2: " must be a upper letter", err2:true})
             }
             else if(!number.test(this.state.password))
             {
              this.setState({warning2: " must be a number letter", err2:true})
             }
             else if(!special.test(this.state.password))
             {
              this.setState({warning2: " must be a special letter", err2:true})
             }
             else
             {
              this.setState({warning2: " ", err2:false})
             }
          }
 
            
   }
   handleSubmit(event) {
     event.preventDefault();
   }
    
  render(){
    let icon=<VisibilityOff onClick={this.Showpass}/>
      if (!this.state.showpassword){
        icon=<Visibility onClick={this.Showpass}/>
      }
  return (
    <div className="bg-contain">
        <header>
          <div className="container">
          
          </div>
        </header>
        <main>
          <div className="container">
            <div onSubmit={this.handleSubmit} className="login-form">
              <form action method="post">
                <h1>Đăng nhập vào website</h1>
                <div>
                  <i />
                  <TextField  className="user-box"
                              error={this.state.err1} 
                              autoFocus={true} type="text" 
                              placeholder="Nhập username" 
                              type='username' name='username' 
                              onKeyUp={this.handleChange} 
                              onChangeCapture={this.handleChange}
                              placeholder='username' 
                              helperText={this.state.warning}
                              inputProps={{
                              maxLength: 10,
                              }}
                              
                              />
                              
                </div>
                <div>
                  <i />
                  <div className="row">
                  <TextField  className="password-box" 
                              error={this.state.err2} 
                              type={this.state.showpassword ? "password" : "text"} 
                              placeholder="Nhập mật khẩu" 
                              name='password' 
                              onKeyUp={this.handleChange}
                              onChangeCapture={this.handleChange} 
                              placeholder='password' 
                              helperText={this.state.warning2}
                              InputProps={{
                              endAdornment: (
                                <InputAdornment className="icon" position="end">
                                  {icon}
                                </InputAdornment>
                              ),
                              }}
                              inputProps={{
                                maxLength: 10,
                              }}
                            />
                    </div>
                </div>
                <div className="btn-box">
                  <button type="submit" onClick={()=>alert("đã đăng nhập")} >
                    Đăng nhập
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
        <footer>
          <div className="container">
            
          </div>
        </footer>
      </div>
  );
}
}

export default Login;
