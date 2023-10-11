import { useState, useEffect } from 'react'
import './home.css'
import axios from "axios";
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';
import { Header } from '../../components/Header/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import { Loading } from '../../components/Loading/Loading';

function Home() {

  const [pokemons, setPokemons] = useState([])
  const [query, setQuery] = useState("")
  

  const getPokemonData = async () => {
    let endpoints = [];
    for (let i = 1; i < 152; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  }
  
  useEffect(() => {
    getPokemonData();
  }, [])


  return (
    <div className='appContainer'>

      <Header setQuery={setQuery} page="Home"/>

      <main className='swiperContainer'>
        <Swiper      
        className='pokemonContainer'
        modules={[Navigation, Pagination, Grid]}
        spaceBetween={25}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        grid={{
          fill: 'row',
          rows: 3,
        }}
        >
          {
            pokemons.filter(pokemon => pokemon.data.name.toLowerCase().includes(query.toLowerCase())).map((filteredPokemon) => (
              <SwiperSlide key={filteredPokemon.data.id}><PokemonCard pokemonData={filteredPokemon.data}/></SwiperSlide>
            ))
          }
        </Swiper>
      </main>

    </div>


  )
}

export default Home
