import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import Haunter from '../../assets/haunter.png';
import './header.css'

export const Header = ({setQuery}) => {
  return (
    <header className='header'>

      <div className='leftContainer'>
        <img src={Haunter} height={125} />
        <a href='#' className='logoTitle'>Pokedex</a>
      </div>

      <Navbar setQuery={setQuery} />
      
    </header>
  )
}
