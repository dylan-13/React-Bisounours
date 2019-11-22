import React from 'react';
import { Link } from 'react-router-dom';
import headerPic from '../../img/14.jpg';
import "./Header.css"

const Header = () => {
    return(
        <div>
          <header>
            <h1>Bienvenue dans le monde des Bisounours</h1>
            <img src={headerPic} alt="header"/>
          </header>
          <Link to='/' style={{padding: '5px'}}>
            Home
          </Link>
          <Link to='/Historic' style={{padding: '5px'}}>
            Historic
          </Link>
          <Link to='/Galerie' style={{padding: '5px'}}>
            Galerie
          </Link>
          <Link to='/Contact' style={{padding: '5px'}}>
            Contact
          </Link>
        </div>
  )};


export default Header;