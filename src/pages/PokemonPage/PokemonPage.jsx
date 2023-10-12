import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { ElementContainer } from '../../components/ElementContainer/ElementContainer'
import { Loading } from '../../components/Loading/Loading'
import './pokemonPage.css'


export const PokemonPage = () => {

  const { pokemon } = useParams()

  const [pokemonData, setPokemonData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getPokemonData = async () => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(response => response.json())
      .then((data) => {
        setPokemonData(data)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getPokemonData()
  }, [])


  return (
    <div className='appContainer'>
      <Header page="PokemonPage" />

      <main className='pokemonPageMainContainer'>
        {
          isLoading ? (
            <Loading />
          )
          :
          (
            <>
              <h2 className='pokemonNameTitle'>{pokemonData.name.toUpperCase()} - N° {pokemonData.id}</h2>
              <div>
                <img className='pokemonImg-PokePage' src={pokemonData.sprites.front_default} />
                <img className='pokemonImg-PokePage' src={pokemonData.sprites.front_shiny} />
              </div>
              <ElementContainer pokemonData={pokemonData} elementSize={"elementContainer-PokePage"}/>
            </>
          )
        }
      </main>
    </div>
  )
}
