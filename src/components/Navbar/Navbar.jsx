import React from 'react'
import './navbar.css'
import { useRef } from 'react'



export const Navbar = ({setQuery}) => {
  const inputQuery = useRef()

  const updateQuery = () => {
    setQuery(inputQuery.current.value)
  }

  return (
    <input type="text" className='searchInput' placeholder='Search a pokemon...'
    ref={inputQuery}
    onChange={updateQuery}
    />
  )
}
