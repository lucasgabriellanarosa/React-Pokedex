import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import Haunter from '../../assets/haunter.png';
import './header.css'

export const Header = () => {
  return (
    <header className='header'>

      <div className='leftContainer'>
        <img src={Haunter} height={125} />
        <h1 className='logoTitle'>Pokedex</h1>
      </div>

      <Navbar/>
      
    </header>
  )
}
