import React from 'react';
import './pokemonCard.css';
import { Link } from 'react-router-dom';
import { ElementContainer } from '../ElementContainer/ElementContainer';

export const PokemonCard = ({pokemonData}) => {
  return (
    <li className='pokemonCard'>
      <img src={pokemonData.sprites.front_default} className='pokemonImg'/>
      <h4 className='pokemonId'>N°{pokemonData.id}</h4>
      <Link to={pokemonData.name} className='pokemonName'>{pokemonData.name.toUpperCase()}</Link>
      <ElementContainer pokemonData={pokemonData}/>
    </li>
  )
}
