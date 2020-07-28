import React, {useState,} from "react";
import './Register.css';
import Register from './register';
import Login from './login';

export default function Login_register(props) {
   const [islogin, setislogin] = useState(true);

  const Handleislogin=()=>{
    setislogin(false)
  }

  const handleisregister=()=>{
       setislogin(true)
  }

   let form 
   if(!islogin){
     form= <Register isregister={handleisregister} />
   }
  else if(islogin){
    form = <Login islogin={Handleislogin} />
  }

  return (
      <div className="bg-contain">
            <div className="login-form">
              <form action='true' method="post">
              {form}
              </form>
            </div>
          </div>
  );
}