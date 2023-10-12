import React from 'react';
import './element.css';
import Bug from '../../assets/elements/bug.png';
import Dark from '../../assets/elements/dark.png';
import Dragon from '../../assets/elements/dragon.png';
import Electric from '../../assets/elements/electric.png';
import Fairy from '../../assets/elements/fairy.png';
import Fighting from '../../assets/elements/fighting.png';
import Fire from '../../assets/elements/fire.png';
import Flying from '../../assets/elements/flying.png';
import Ghost from '../../assets/elements/ghost.png';
import Grass from '../../assets/elements/grass.png';
import Ground from '../../assets/elements/ground.png';
import Ice from '../../assets/elements/ice.png';
import Normal from '../../assets/elements/normal.png';
import Poison from '../../assets/elements/poison.png';
import Psychic from '../../assets/elements/psychic.png';
import Rock from '../../assets/elements/rock.png';
import Steel from '../../assets/elements/steel.png';
import Water from '../../assets/elements/water.png';

export const Element = ({ elementName, elementSize }) => {

  const renderElement = () => {
    switch (elementName) {
      case 'bug':
        return <img className={elementSize} src={Bug} />
      case 'dark':
        return <img className={elementSize} src={Dark} />
      case 'dragon':
        return <img className={elementSize} src={Dragon} />
      case 'electric':
        return <img className={elementSize} src={Electric} />
      case 'fairy':
        return <img className={elementSize} src={Fairy} />
      case 'fighting':
        return <img className={elementSize} src={Fighting} />
      case 'fire':
        return <img className={elementSize} src={Fire} />
      case 'flying':
        return <img className={elementSize} src={Flying} />
      case 'ghost':
        return <img className={elementSize} src={Ghost} />
      case 'grass':
        return <img className={elementSize} src={Grass} />
      case 'ground':
        return <img className={elementSize} src={Ground} />
      case 'ice':
        return <img className={elementSize} src={Ice} />
      case 'normal':
        return <img className={elementSize} src={Normal} />
      case 'poison':
        return <img className={elementSize} src={Poison} />
      case 'psychic':
        return <img className={elementSize} src={Psychic} />
      case 'rock':
        return <img className={elementSize} src={Rock} />
      case 'steel':
        return <img className={elementSize} src={Steel} />
      case 'water':
        return <img className={elementSize} src={Water} />
    }
  }



  return (
    <>
      {renderElement()}
    </>
  )
}
