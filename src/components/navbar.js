import React from "react";
import Stack from "../images/stack.png";
import User from "../images/user.png";

const Navbar = () => {
  return (
    <div>
      <nav className='navbar  justify-content-between'>
        <div>
          <img className='stack' src={Stack} alt='stack' />
          <a className='navbar-brand text-white'>Dostow Space</a>
        </div>
        <img className='user' src={User} alt='user' />
      </nav>
    </div>
  );
};

export default Navbar;
