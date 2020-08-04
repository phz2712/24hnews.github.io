import React from 'react';
import './Login.css';
import {TextField, InputAdornment,} from '@material-ui/core';
import { Visibility, VisibilityOff} from '@material-ui/icons';
import { data } from 'jquery';




class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state={
       warning        : ' ',
       username       : "",
       password       : "",
       warning2       : ' ',
       err1           : false,
       err2           : false,
       showpassword   : true,
       disabled       : true
    }
    this.handleChange       = this.handleChange.bind(this);
    this.Showpass           = this.Showpass.bind(this);
    this.Register           = this.Register.bind(this);
    // this.UNSAFE_componentWillMount           = this.UNSAFE_componentWillMount.bind(this);
  }

  // UNSAFE_componentWillMount()
  // {
    // let user=this.props.user
    // if(user!==data){}
    // else{
      // this.setState({username: user.username,password:user.password})
    // }
  //   console.log(this.props.user)
  // }
  // UNSAFE_componentWillReceiveProps(nextprops)
  // {
  //   let user=nextprops.props.user
  //   if(user===[]){}
  //   else{
  //     this.setState({username: user.username,password:user.password})
  //   }
  // }

  Showpass(){
    this.setState({showpassword: !this.state.showpassword})
  }
  
 
  
   handleChange(event) {
        
         const target = event.target;
         const value = target.name === 'isGoing' ? target.checked : target.value;
         target.value = target.value.replace(/\s/g, "");
         const name = target.name;
         this.setState({
           [name]: value});

         
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
          
        
          console.log(this.props.user)
            
 
          /*const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_[!@#$%^&*]_)).{3,}$/;*/
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
            /* dk button */
      if(this.state.err1===true||this.state.err2===true||this.state.username===''||this.state.password===''){
        this.setState({disabled: true});
      }
      else{
       this.setState({disabled: false});
      }
            
   }
   handleSubmit(event) {
     event.preventDefault();
    
   }
    
   Register(){
    this.props.islogin();
  }
  render(){
    let icon=<VisibilityOff onClick={this.Showpass}/>
      if (!this.state.showpassword){
        icon=<Visibility onClick={this.Showpass}/>
      }
    // let valueuser=this.state.username;
    //   if (this.props.user!==null){
    //     valueuser=this.props.user.username;
    //   }
    //   let valuepassword=this.state.password;
    //   if (this.props.user!==null){
    //     valuepassword=this.props.user.password;
    //   }
    console.log(this.props.user)
  return (
    <div className="bg-contain">
          <div className="container">
            <div onSubmit={this.handleSubmit} className="login-form">
              <form method="post">
                <div className="row">
                <h1 type="button" onClick={this.Register} className="register">Register</h1>
                <h1 type="button" className="login">Login</h1>
                </div>
                <div className="user-box">
                  <i />
                  <TextField  className="user-box"
                              error={this.state.err1} 
                              autoFocus={true}
                              type='username' name='username' 
                              value={this.props.user.username}
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
                              name='password' 
                              onKeyUp={this.handleChange}
                              value={this.props.user.password}
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
                <div className="btnl-box">
                  <button type="submit" className="btn-secondary" disabled={this.state.disabled} onClick={()=>alert("đã đăng nhập")} >
                    Login
                  </button>
                 
                </div>
              </form>
            </div>
          </div>
      </div>
  );
}
}


const mapStateToProps = state =>{return{
    users: state.submit
}};
export default Login;
