import React, {useEffect} from 'react';
import {TextField, InputAdornment,} from '@material-ui/core';
import { Visibility, VisibilityOff} from '@material-ui/icons';
import {StyleDiv, Styleh1, StyleButton} from "./styleLogin";
// const useStyles = makeStyles(theme => ({
//   root: 
//   {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "100%"
//     }
//   },
//   formtextfield: 
//   {
//     width: "100%",
//     outline: "none",
//     marginTop: "-5px",
//     border: "2px solid #dddddd",
//     borderRight: "none",
//     borderBottom: "none",
//   }, 
// }));

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
    }
    Showpass(){
        this.setState({showpassword: !this.state.showpassword})
    }
    handleChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        if (target.value!== undefined)
        {target.value = target.value.replace(/\s/g, "");}
        const name = target.name;
        this.setState({
        [name]: value});
        this.validate();
    }

    validate(){
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
        const lower   = /^(?=.*[a-z]).{0,}$/;
        const upper   = /^(?=.*[A-Z]).{0,}$/;
        const number  = /^(?=.*\d).{0,}$/;
        const special = /^(?=.*(\W|_[!@#$%^&*]_)).{0,}$/;
        console.log(!lower.test(this.state.password))

        if(this.state.password===""){
            this.setState({warning2: " ", err2:false})
        }
        else
        {       
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
    handleSubmit(event) 
    {
        event.preventDefault();
    }
    Register()
    {
        this.props.islogin();
    }
    render(){
        let icon=<VisibilityOff onClick={this.Showpass}/>
        if (!this.state.showpassword){
            icon=<Visibility onClick={this.Showpass}/>
        }
        let valueuser=this.state.username;
        if (this.props.user!==""){
            valueuser=this.props.user.username;
        }
        let valuepassword=this.state.password;
        if (this.props.user!==""){
            valuepassword=this.props.user.password;
        }
        let disabled=this.state.disabled;
        if (this.props.user!==""){
            disabled=this.props.disabled;
        }
    //  const classes = useStyles();
        console.log(this.props.user)
        return (
            <StyleDiv className="bg-contain">
                <StyleDiv onSubmit={this.handleSubmit} className="login-form">
                    <form method="post">
                        <StyleDiv className="row">
                            <Styleh1 type="button" onClick={this.Register} className="register">Register</Styleh1>
                            <Styleh1 type="button" className="login">Login</Styleh1>
                        </StyleDiv>
                        <StyleDiv className="user-box">
                            <TextField  
                                className="user-box"
                                error={this.state.err1} 
                                autoFocus={true}
                                type='username' name='username' 
                                value={valueuser}
                                onKeyUp={this.handleChange} 
                                onChangeCapture={this.handleChange}
                                placeholder='Username' 
                                helperText={this.state.warning}
                                inputProps={{
                                maxLength: 10,
                                }}
                            />            
                        </StyleDiv>
                        <StyleDiv>
                            <StyleDiv className="row">
                                <TextField  
                                    className="password-box" 
                                    error={this.state.err2} 
                                    type={this.state.showpassword ? "password" : "text"} 
                                    name='password' 
                                    onKeyUp={this.handleChange}
                                    value={valuepassword}
                                    onChangeCapture={this.handleChange} 
                                    placeholder='Password' 
                                    helperText={this.state.warning2}
                                    InputProps={{
                                    endAdornment: (
                                    <InputAdornment className="icon" position="end">
                                        {icon}
                                    </InputAdornment>
                                    ),
                                    }}
                                    inputProps=
                                    {{
                                    maxLength: 10,
                                    }}
                                />
                            </StyleDiv>
                        </StyleDiv>
                        <StyleDiv  className="btnl-box">
                            <StyleButton type="submit" disabled={disabled} onClick={()=>alert("đã đăng nhập")} >
                                Login
                            </StyleButton>
                        </StyleDiv>
                    </form> 
                </StyleDiv>
            </StyleDiv>
        );
    }
}
export default Login;
