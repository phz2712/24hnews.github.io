import React, {useState, useReducer} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {TextField, Select, Input, MenuItem, InputLabel, FormControlLabel, RadioGroup, Radio, FormControl, FormLabel, Typography} from "@material-ui/core";
import './Register.css';

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%"
    }
  },
  formlabel: {
    fontSize:13,
    fontFamily:'Arial',
    marginBottom:"0",
  },
  formcontrollabel: {
    fontSize:13,
    textAlign:'left',
  },
  textField: {
    fontSize:13,
    textAlign:'right',
    marginRight:"0px",
  },
  formControl: {
    marginTop: "10px",
    width: '100%'
  }
}));

const citis = [
  "Điện Biên", "Hòa Bình", "Lai Châu", "Lào Cai", "Sơn La", "Yên Bái",'Bắc Giang', 'Bắc Kạn' ,"Cao Bằng",'Hà Giang',
  "Lạng Sơn", "Phú Thọ","Quảng Ninh", "Thái Nguyên","Tuyên Quang", "Bắc Ninh", "Hà Nam", "Hà Nội","Hải Dương", "Hải Phòng"
  ,"Hưng Yên","Nam Định","Ninh Bình","Thái Bình","Vĩnh Phúc", "Hà Tĩnh", "Nghệ An","Quảng Bình","Quảng Trị","Thanh Hóa"
  ,"Thừa Thiên Huế", "Bình Định", "Bình Thuận", "Đà Nẵng", "Khánh Hòa", "Ninh Thuận", "Phú Yên", "Quảng Nam", "Quảng Ngãi"
  ,"Đắk Lắk", "Đắk Nông", "Gia Lai", "Kon Tum", "Lâm Đồng", "Bà Rịa Vũng Tàu","Bình Dương","Bình Phước","Đồng Nai","Hồ Chí Minh"
  ,"Tây Ninh", "An Giang","Bạc Liêu","Bến Tre","Cà Mau","Cần Thơ","Đồng Tháp","Hậu Giang","Kiên Giang","Long An"
  ,"Sóc Trăng","Tiền Giang","Trà Vinh","Vĩnh Long"
];

export default function BasicTextFields() {
  
  const [user, setuser] = useReducer(
    (state, newState) => ({...state, ...newState}),
      {
      username:'',
      password:'',
      repassword:'',
      
      showpassword:true,
      err1: false,
      err2:false,
      warning:' ',
      warning2:' ',
      }

    );
      const [city, setcity] = React.useState([]);

  const classes = useStyles();
  
  function handleOnchange(event) {
    
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;
    if(name==="username" || name=== "password"){target.value = target.value.replace(/\s/g, "");}
    console.log(name)
    if(name==="city"){
      setcity(value);
    }
    else
    {setuser({[name]: value });}
    
     switch (user.username.length){
       case 0:
       case 4:
       case 5:
       case 6:
       case 7:
       case 8:
       case 9:
       case 10:
        setuser({Warning: " "});
        setuser({err1: false});
       break;
       default:
       setuser({Warning: "Higher 4 letters"});
       setuser({err1: true});
       break;
     }
       
   
     console.log(user.username)
       

     /*const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_[!@#$%^&*]_)).{3,}$/;*/
     const lower   = /^(?=.*[a-z]).{0,}$/;
     const upper   = /^(?=.*[A-Z]).{0,}$/;
     const number  = /^(?=.*\d).{0,}$/;
     const special = /^(?=.*(\W|_[!@#$%^&*]_)).{0,}$/;
    


    if(user.password===""){
        setuser({warning2: ' '});
        setuser({err2: false});
      }
     else{ 
       
       if(!lower.test(user.password))
        {
         setuser({warning2: "must be a lower letter"});
         setuser({err2: true});
        }
        else if(!upper.test(user.password))
        {
         setuser({warning2: " must be a upper letter"});
         setuser({err2: true});
        }
        else if(!number.test(user.password))
        {
         setuser({warning2: " must be a number letter"});
         setuser({err2: true});
        }
        else if(!special.test(user.password))
        {
          setuser({warning2: " must be a special letter"});
          setuser({err2: true});
         
        }
        else
        {
          setuser({warning2: " "});
          setuser({err2: false});
        }
     }
  }
  
  return (
   
      <div className="bg-contain">
        
      
         
            <div className="login-form">
              <form action='true' method="post">
                <h1>Đăng Ký vào website</h1>
                <div>
                  <i />
                  <TextField  
                    className="user-box"
                    error={user.err1} 
                    autoFocus={true} type="text" 
                    placeholder="username" 
                     name='username'
                    onChange={e => 
                    {
                      handleOnchange(e);
                    }}
                    helperText={user.warning}
                    inputProps={{
                    maxLength: 10,
                    }}
                    />
                              
                </div>
                <div>
                  <i />
                
                  <TextField  
                    className="password-box" 
                    error={user.err2} 
                    type='password' 
                    name='password' 
                    onChange={e => 
                    {
                      handleOnchange(e);
                    }} 
                    placeholder='password' 
                    helperText={user.warning2}
                    inputProps={{
                    maxLength: 10,
                    }}
                  />
                    <TextField  
                      className="password-box" 
                      error={user.err2} 
                      type='password'
                      name='repassword' 
                      onChange={e => 
                      {
                        handleOnchange(e);
                      }} 
                      placeholder='repassword' 
                      helperText={user.warning2}
                      inputProps={{
                      maxLength: 10,
                      }}
                    />
                    
                </div>
                <div className="info">
                  <i />
                  <div className={classes.formcontrollabel} style={{border:'none'}}>
                  <FormControl className="gender" component="fieldset">
                    <FormLabel className={classes.formlabel} component="legend">Gender</FormLabel>
                    <RadioGroup row aria-label="position" name="position" defaultValue="top">
                      <FormControlLabel
                        
                        control={<Radio color="primary" />}
                        label={
                          <Typography> Male </Typography>
                        }
                        value="male"
                      />
                      <FormControlLabel
                        
                        control={<Radio color="primary" />}
                        label={
                          <Typography> Female </Typography>
                        }
                        value="female"
                      />
                      
                    </RadioGroup>
                  </FormControl>
                  <TextField
            
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="1990-05-24"
                    className="birth-box"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  
                    </div>
                </div>
                <TextField  
                  className="job-box"  
                  type='text'
                  name='Jobs' 
                  onChange={e => 
                  {
                    handleOnchange(e);
                  }} 
                  placeholder='Jobs' 
                  inputProps={{
                  maxLength: 10,
                  }}
                />
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Your Place</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={city}
          name='city'
          onChange={e => 
            {
              handleOnchange(e);
            }} 
          input={<Input />}
        >
          {citis.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
                <div className="btn-box">
                  <button disabled type="submit" onClick={()=>alert("đã đăng nhập")} >
                    Đăng Ký
                  </button>
                </div>
              </form>
            </div>
          </div>
  );
}