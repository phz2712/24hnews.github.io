import React from 'react'
import Login from "./login"
import { connect } from 'react-redux';

function Login2(props) {
    const {users, islogin}=props
    const logins =  users.map(user => 
    { 
    if (user.id+1===users.length)
    {return (<Login key={user.id} islogin={islogin} disabled={false} user={user} /> )}
    });

    return(
        logins
    )
}
const mapStateToProps = state =>{return{
    users: state.submit
}};
export default connect(mapStateToProps,null)(Login2);