import React from 'react';
import './pokemonCard.css';
import { Element } from '../Element/Element';


export const PokemonCard = ({pokemonData}) => {
  const pokedexLink = `https://www.pokemon.com/br/pokedex/${pokemonData.name}` 

  return (
    <li className='pokemonCard'>
      <img src={pokemonData.sprites.front_default} className='pokemonImg'/>
      <h4 className='pokemonId'>N°{pokemonData.id}</h4>
      <a className='pokemonName' href={pokedexLink}>{pokemonData.name.toUpperCase()}</a>
      <div className='elementContainer'>
        {pokemonData.types.map((element) => <Element key={element.slot} elementName={element.type.name}/>)}
      </div>
    </li>
  )
}
