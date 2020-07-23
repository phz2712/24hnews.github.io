import React from 'react';
import './Login.css';
import {TextField, InputAdornment, } from '@material-ui/core';
import { RemoveRedEye } from '@material-ui/icons';

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
       showpassword:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.Showpass = this.Showpass.bind(this);
  }
  Showpass(){
    this.setState({showpassword: !this.state.showpassword})
  }
   handleChange(event) 
   {
         
         const target = event.target;
         const value = target.name === 'isGoing' ? target.checked : target.value;
         const name = target.name;
         this.setState({
           [name]: value    });
          if(/\s/.test(this.state.username) && this.state.username.length>1)
           {
            this.setState({warning: "no space in here", err1:true});
           }
           else
          {switch (this.state.username.length){

            case 1:
            case 0:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
             this.setState({warning: " ",err1:false });
            break;
            default:
            this.setState({warning: "Higher 4 and lower 10", err1:true});
            break;
          }}
            
        
          console.log(this.state.username)
            
 
         const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{3,10}$/;
         if(/\s/.test(this.state.password)&& this.state.username.length>1) {
          this.setState({warning2: "no space in here", err2:true})
         }
         else
         {if(this.state.password===""){
            this.setState({warning2: " ", err2:false})
           }
          else if(!re.test(this.state.password))
             { if(this.state.password.length===1){
              this.setState({password: '',warning2: " ",err2:false });
             } else
               this.setState({warning2: "Have a num,a lower,an upper and special letter", err2:true})
               
             }
             else{
               this.setState({warning2: " ", err2:false})
             }}
 
     
   }
   handleSubmit(event) {
     event.preventDefault();
   }

  render(){
    
  return (
    <div>
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
                              value={this.state.username}
                              type='username' name='username' 
                              onChangeCapture={this.handleChange} 
                              placeholder='username' 
                              helperText={this.state.warning}/>
                </div>
                <div>
                  <i />
                  <div className="row">
                  <TextField  className="password-box" 
                              error={this.state.err2} 
                              type={this.state.showpassword ? "password" : "text"} 
                              placeholder="Nhập mật khẩu" 
                              name='password' 
                              onChangeCapture={this.handleChange} 
                              placeholder='password' 
                              helperText={this.state.warning2}
                               >  </TextField>
                                <InputAdornment className='icon'>
                                  <RemoveRedEye type="button" onClick={this.Showpass} />
                                </InputAdornment>
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
