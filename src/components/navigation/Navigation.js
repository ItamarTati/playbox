import React from 'react';
import './Navigation.css';
import Logo from '../../playbox.jpg';
import { FaBell } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';






function Navigation(){
    return (
      <header>
        <div className='header'>
        <div className="Logo">
        <a href="#home"><img src={Logo} alt={Logo}/></a>
        </div>      
        <nav className="main-nav">                
          <a href="#home">Browse</a>
          <a href="#tvShows">TV Shows</a>
          <a href="#movies">Movies</a>
          <a href="#newarrival">New Arrivals</a>
        </nav>

        <nav className="sub-nav"> 
          <a href="#home"><FaSearch/></a>
          <a href="#home"><FaBell /></a>
          <a href="#home">Account</a>
          
          
          
        </nav> 
          
      </div>
      </header>

    )
}




export default Navigation



