import React, {useState, useReducer,} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {TextField, Select, Input, MenuItem, InputLabel, FormControlLabel,
RadioGroup, Radio, FormControl, FormLabel, Typography} from "@material-ui/core";
import './Register.css';
import Autocomplete from '@material-ui/lab/Autocomplete';
import * as moment from 'moment'
import { MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

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
    marginTop: "-10px",
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

export default function Register(props) {
  
  const [user, setuser] = useReducer(
    (state, newState) => ({...state, ...newState}),
      {
      username      :'',
      password      :'',
      repassword    :'',
      err1          :false,
      err2          :false,
      err3          :false,
      err4          :false,
      err5          :false,
      warning       :' ',
      warning2      :' ',
      warning3      :' ',
      warning4      :' ',
      warning5      :' ',
      gender        :"male",
      birth         :"",
      job           :"",
      disabled      :true
      }

    );
  const [city, setcity] = useState('');

  const classes = useStyles();

  const defaultjob=[{title: "artist"},
  {title:"astronaut"},
  {title: "chef"},
  {title: "construction worker"},
  {title:  "firefighter"},
  {title: "doctor"},
  {title: "police"},
  {title: "teacher"},]

  const date =new Date();
      
    const formatdate = moment(date).format('YYYY-MM-DD');

  function handleOnchange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if(name==="username" || name=== "password"){target.value = target.value.replace(/\s/g, "");}
    
    console.log("value", event.target.value);
    console.log(user.job.type)
  
    if(name==="city"){
      setcity(value);
    }
    else
    {setuser({[name]: value });}
    /* dk login */
    if(user.username==="" && user.password !==""){
      setuser({warning: "Higher 4 letters"});
      setuser({err1:true})
    }
    else if (user.username.length===0|| user.username.length>=4){
      setuser({warning: " "});
      setuser({err1:false})
    }
    else{
      setuser({warning: "Higher 4 letters"});
      setuser({err1:true})
    }
      /* dk password */
     /*const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_[!@#$%^&*]_)).{3,}$/;*/
     const lower   = /^(?=.*[a-z]).{0,}$/;
     const upper   = /^(?=.*[A-Z]).{0,}$/;
     const number  = /^(?=.*\d).{0,}$/;
     const special = /^(?=.*(\W|_[!@#$%^&*]_)).{0,}$/;
    

      if(user.password===""&&user.repassword !==""){
        setuser({warning2: "must be higher 4"});
        setuser({err2: true});
      }
    else if(user.password==="")
      {
        setuser({warning2: ' '});
        setuser({err2: false});
      }
    else if(!upper.test(user.password)&&!number.test(user.password)&&!special.test(user.password))
    {
      setuser({warning2: "must be a upper,number and special letter"});
         setuser({err2: true});
    }
    else if(!lower.test(user.password)&&!number.test(user.password)&&!special.test(user.password))
    {
      setuser({warning2: "must be a lower,number and special letter"});
         setuser({err2: true});
    }
    else if(!lower.test(user.password)&&!upper.test(user.password)&&!special.test(user.password))
    {
      setuser({warning2: "must be a lower letter, upper and special letter"});
         setuser({err2: true});
    }
    else if(!lower.test(user.password)&&!upper.test(user.password)&&!number.test(user.password))
    {
      setuser({warning2: "must be a lower letter, upper,number letter"});
         setuser({err2: true});
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
        /* dk repassword */
      if(user.repassword===""&& user.birth!==""){
        setuser({warning3: "repassword is false"});
       setuser({err3: true});
      }
     else if (user.repassword===user.password||user.repassword==='')
     {
       setuser({warning3: " "});
       setuser({err3: false});
     }
     else{
       setuser({warning3: "repassword is false"});
       setuser({err3: true});
     }
      /* dk birthday */
     if(user.birth===""&& user.job!==""){
       setuser({warning4: "must be have a birthday"})
       setuser({err4: true});
     }
     else{
      setuser({warning4: " "});
      setuser({err4: false});
     }
      /* dk job */
      if(user.job===""& city!==""){
        setuser({warning5: "must be have a job"})
        setuser({err5: true});
      }
      else{
       setuser({warning5: " "});
       setuser({err5: false});
      }
      /* dk button */
      if(user.err1===false&&user.err2===false&&user.err3===false&&user.err4===false&&user.err5===false&& city!==""){
        setuser({disabled: false});
      }
      else{
       setuser({disabled: true});
      }
  };

  function handleSubmit(event) {
    event.preventDefault();
  }
  function onlogin() {
    props.isregister();
  }
  
  return (
      <div className="bg-contain">
            <div onSubmit={handleSubmit} className="login-form">
              <form action='true' method="post">
              <div className="row">
                <h1 type="button" className="registerr">Register</h1>
                <h1 type="button" onClick={onlogin} className="loginr">Login</h1>
              </div>
                <div>
                  <i/>
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
                    onKeyUp={e => 
                    {
                      handleOnchange(e);
                    }}
                    helperText={user.warning}
                    inputProps={{
                    maxLength: 10,
                    }}
                    />
                    <TextField  
                    className="user-box"
                    error={user.err1} 
                    autoFocus={true} type="text" 
                    placeholder="Email" 
                     name='Email'
                    onChange={e => 
                    {
                      handleOnchange(e);
                    }}
                    onKeyUp={e => 
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
                    className="passwordr-box" 
                    error={user.err2} 
                    type='password' 
                    name='password' 
                    onChange={e => 
                    {
                      handleOnchange(e);
                    }}
                    onKeyUp={e => 
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
                      className="passwordr-box" 
                      error={user.err3} 
                      type='password'
                      name='repassword' 
                      onChange={e => 
                      {
                        handleOnchange(e);
                      }}
                      onKeyUp={e => 
                    {
                      handleOnchange(e);
                    }}
                      placeholder='repassword' 
                      helperText={user.warning3}
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
                    <RadioGroup 
                      row aria-label="position"  
                      onClick={e => {handleOnchange(e);}} 
                      onFocus={e => {handleOnchange(e);}} 
                      value={user.gender} 
                      name="gender" 
                      defaultValue="top"
                      >
                      <FormControlLabel
                       
                        control={<Radio color="primary" />}
                        label={
                          <Typography> Male </Typography>
                        }
                        value="male"
                      />
                      <FormControlLabel
                        
                        control={<Radio color="secondary" />}
                        label={
                          <Typography> Female </Typography>
                        }
                        value="female"
                      />
                      
                    </RadioGroup>
                  </FormControl>
                  <TextField
            
                    id        ="date"
                    label     ="Birthday"
                    type      ="date"
                    className ="birth-box"
                    name      ="birth"
                    error     ={user.err4}
                    helperText={user.warning4}
                    onChange  ={e => 
                      {
                        handleOnchange(e);
                      }}
                      onMouseOut  ={e => 
                      {
                        handleOnchange(e);
                      }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                    </div>
                </div>
                <Autocomplete
                  freeSolo
                  id="free-solo-2-demo"
                  name='job'
                  className="job-box"
                  options={defaultjob}
                  getOptionLabel={(option) => option.title}
                  getOptionSelected={(option, value) => option.title === value.title}
                  onChange  ={e => 
                  {
                    handleOnchange(e);
                  }} 
                  onMouseMove={e => 
                  {
                    handleOnchange(e);
                  }}
                  renderInput={(params) => <TextField {...params} error={user.err5}
                  
                  helperText={user.warning5}  name='job' label='Jobs' margin="normal" onChange  ={e => 
                  {
                    handleOnchange(e);
                  }} 
                  onKeyUp={e => 
                  {
                    handleOnchange(e);
                  }} />}
                />
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Your Place</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          value={city}
          name='city'
          onClick={e => 
            {
              handleOnchange(e);
            }} 
          onMouseOut={e => 
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
                  <button className="btn-success" disabled={user.disabled} onClick={()=>alert("đã đăng kí thành công")} >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
  );
}