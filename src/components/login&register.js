import React, {useState,} from "react";
import './Register.css';
import Register from './register';
import Login2 from './login2';
import Login from './login';
import { connect } from 'react-redux';
import { data } from "jquery";

 function Login_register(props) {
   const [islogin, setislogin] = useState(false);

  const Handleislogin=()=>
{
    setislogin(false)
  }

  const handleisregister=()=>
{
       setislogin(true)
  }

   let form 
    if(islogin)
    { 
      // if(props.users!== data)
      // form = <Login islogin={Handleislogin} />
      // else{
        form = <Login2 islogin={Handleislogin} />
      // }
    }
    else if(!islogin)
    {
     form= <Register isregister={handleisregister} />
    }

  return (
      <div className="bg-contain">
            <div className="login-form">
              {form}
            
            </div>
          </div>
  );
}
const mapStateToProps = state =>{return{
  users: state.submit
}};
export default connect(mapStateToProps,null)(Login_register);