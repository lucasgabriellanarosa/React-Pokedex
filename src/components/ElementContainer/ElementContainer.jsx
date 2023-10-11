import React from 'react'
import { Element } from '../Element/Element'

export const ElementContainer = ({pokemonData}) => {
  return (
    <div className='elementContainer'>
        {pokemonData.types.map((element) => <Element key={element.slot} elementName={element.type.name}/>)}
    </div>
  )
}
