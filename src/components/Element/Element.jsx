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

export const Element = ({ elementName }) => {

  const renderElement = () => {
    switch (elementName) {
      case 'bug':
        return <img src={Bug} />
      case 'dark':
        return <img src={Dark} />
      case 'dragon':
        return <img src={Dragon} />
      case 'electric':
        return <img src={Electric} />
      case 'fairy':
        return <img src={Fairy} />
      case 'fighting':
        return <img src={Fighting} />
      case 'fire':
        return <img src={Fire} />
      case 'flying':
        return <img src={Flying} />
      case 'ghost':
        return <img src={Ghost} />
      case 'grass':
        return <img src={Grass} />
      case 'ground':
        return <img src={Ground} />
      case 'ice':
        return <img src={Ice} />
      case 'normal':
        return <img src={Normal} />
      case 'poison':
        return <img src={Poison} />
      case 'psychic':
        return <img src={Psychic} />
      case 'rock':
        return <img src={Rock} />
      case 'steel':
        return <img src={Steel} />
      case 'water':
        return <img src={Water} />
    }
  }
  return (
    <a href='#'>
      {renderElement()}
    </a>
  )
}
