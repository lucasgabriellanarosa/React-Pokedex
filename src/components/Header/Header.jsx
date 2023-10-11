import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import Haunter from '../../assets/haunter.png';
import './header.css'
import { Link } from 'react-router-dom';

export const Header = ({setQuery, page}) => {
  return (
    <header className='header'>

      <div className='leftContainer'>
        <img src={Haunter} height={125} />
        <Link to="/" className='logoTitle'>Pokedex</Link>
      </div>

      {page === "Home" && <Navbar setQuery={setQuery} />}
  
    </header>
  )
}
