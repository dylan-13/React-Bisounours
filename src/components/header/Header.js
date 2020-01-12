import React from 'react';
import { Link } from 'react-router-dom';
import headerPic from '../../img/16.jpg';
import "./Header.css"

const Header = () => {
    return(
        <div>
          <h1 className='title'>Bienvenue dans le monde des Bisounours</h1>
          <img src={headerPic} alt="header"/>
            <div className='navbar'>
              <Link to='/'>Accueil</Link>
              <Link to='/Historic'>Historique</Link>
              <Link to='/Galerie'>Gallerie</Link>
              <Link to='/Contact'>Contact</Link>
            </div>
        </div>
  )};


export default Header;