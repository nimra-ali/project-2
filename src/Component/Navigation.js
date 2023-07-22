import React from 'react';
import logo from '../Images/img-1.jpg'
const Navigation = () => {
    return (
      <nav className='navigation'>
        <div className="logo">
          <img src={logo} alt="navbarimg" />
        </div>
  
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  };
  export default Navigation