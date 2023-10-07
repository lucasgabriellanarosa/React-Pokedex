import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import Diancie from '../../assets/diancie.png';
import './header.css'

export const Header = () => {
  return (
    <header className='header'>

      <div className='leftContainer'>
        <img src={Diancie} height={125} />
        <h1 className='logoTitle'>Pokedex</h1>
      </div>

      <Navbar/>
      
    </header>
  )
}
