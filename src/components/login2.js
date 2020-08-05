import React from 'react'
import PropTypes from 'prop-types'
import Login from "./login"
import { connect } from 'react-redux';

function Login2(props) {
    const {users, islogin}=props
    const logins =  users.map(user =>{return (
          <Login key={user.id} islogin={islogin} user={user} />
    )})
   return(
     logins
   )
  }
  

const mapStateToProps = state =>{return{
    users: state.submit
}};
export default connect(mapStateToProps,null)(Login2);