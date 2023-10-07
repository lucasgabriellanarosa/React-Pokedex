import React from 'react'

export const PokemonCard = ({pokemonData}) => {
  return (
    <li>
        <p>{pokemonData.name}</p>
        <img src={pokemonData.sprites.front_default} />
    </li>
  )
}
