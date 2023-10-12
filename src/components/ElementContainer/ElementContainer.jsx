import React from 'react'
import { Element } from '../Element/Element'
import './elementContainer.css'

export const ElementContainer = ({pokemonData, elementSize}) => {
  return (
    <div className='elementContainer'>
        {pokemonData.types.map((element) => <Element elementSize={elementSize} key={element.slot} elementName={element.type.name}/>)}
    </div>
  )
}
