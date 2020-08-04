import React from 'react'
import PropTypes from 'prop-types'
import Login from "./login"
import { connect } from 'react-redux';


const Login2 = ({users}) => (
    users.map(user => (
        <Login key={user.id} user={user} />
))

)

Login2.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id      : PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
}

const mapStateToProps = state =>{return{
    users: state.submit
}};
export default connect(mapStateToProps,null)(Login2);