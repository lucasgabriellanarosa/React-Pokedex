import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";
import { PokemonCard } from './components/PokemonCard/PokemonCard';
import { Header } from './components/Header/Header';
function App() {

  const [pokemons, setPokemons] = useState([])

  const getPokemonData = async () => {
    let endpoints = [];
    for (let i = 1; i < 13; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  }
  
  useEffect(() => {
    getPokemonData();
  }, [])

  return (
    <div className='appContainer'>
      <Header />


      <ul className='pokemonContainer'>
        {
          pokemons.map((pokemon) => <PokemonCard key={pokemon.data.id} pokemonData={pokemon.data}/> )
        }
      </ul>
    </div>


  )
}

export default App
