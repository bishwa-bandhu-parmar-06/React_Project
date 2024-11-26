import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/header.scss"
import { ImSearch } from "react-icons/im";

const Header = () => {
  return (
    <nav className="header">
        <h1 className='logo'>FilMotion.</h1>
        <div className='menu'>
            <Link to="/" >Home</Link>
            <Link to="/tvshows" >TV Shows</Link>
            <Link to="/movies" >Movies</Link>
            <Link to="/recent" >Recently Added</Link>
            <Link to="/mylist" >My List</Link>       
        </div>
        <ImSearch className='searchicon'/>  
    </nav>
  )
}

export default Header