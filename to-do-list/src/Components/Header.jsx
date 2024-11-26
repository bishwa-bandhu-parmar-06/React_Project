import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/header.scss";

const Header = () => {
  return (
    <nav>
      
      <h1>
        {/* <span className='mainc'> */}
          <span className='first'>B</span>
          <span className='second'>B</span>
        {/* </span> */}
      </h1>
      <main>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/services"}>Services</Link>
      </main>
    </nav>
    
  )
}

export default Header