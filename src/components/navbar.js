import React from "react";
import Stack from "../images/stack.png";
import User from "../images/user.png";
import firebase from "./fireConfig";
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
          <button
            type='button'
            className='logout-btn btn btn-outline-dark'
            onClick={logout}
          >
            Logout
          </button>
          <img className='user' src={User} alt='user' />
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
