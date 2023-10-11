import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import './pokemonPage.css'
import { ElementContainer } from '../../components/ElementContainer/ElementContainer'
import { Loading } from '../../components/Loading/Loading'


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

  console.log(pokemonData)

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
              <h2>{pokemonData.name}</h2>
              <p>N°{pokemonData.id}</p>
              <img src={pokemonData.sprites.front_default} />
              <ElementContainer pokemonData={pokemonData}/>
            </>
          )
        }
      </main>
    </div>
  )
}
