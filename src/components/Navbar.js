import React from "react";
import Stack from "../images/stack.png";
import User from "../images/user.png";
import firebase from "../services/fireConfig";
import { withRouter } from "react-router-dom";

const Navbar = (props) => {
  const logout = async () => {
    await firebase.logout();
    props.history.push("/");
    console.log("Logged out successfully");
  };
  return (
    <div>
      <nav className='navbar justify-content-between'>
        <div>
          <img className='stack' src={Stack} alt='stack' />
          <a className='navbar-brand text-white'>Dostow Space</a>
        </div>
        <div className='d-flex justify-content-between'>
          <p className='logout-btn ' onClick={logout}>
            Logout
          </p>
          <img className='user' src={User} alt='user' />
          <p className='username'>{firebase.getCurrentUser()}</p>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
