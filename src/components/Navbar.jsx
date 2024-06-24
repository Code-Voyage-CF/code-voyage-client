import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div>
        <img className="logo" src="https://avatars.githubusercontent.com/u/168231233?s=400&u=35061c7cd2dd71fd65fcf513613191d265afd1db&v=4" alt="logo" />
      </div>
      <div className="title">Code Voyage</div>
      <div className="nav-items">
        <a>Home |</a>
        <a> About |</a>
        <a> Login</a>
      </div>
    </nav>
  );
};

export default Navbar;