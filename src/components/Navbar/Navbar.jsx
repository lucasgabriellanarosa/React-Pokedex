import React from 'react'
import './navbar.css'
import { HiSearch } from "react-icons/hi";

export const Navbar = () => {
  return (
    <form action="" className='searchForm'>
      <input type="text" className='searchInput' placeholder='Search a pokemon...'/>
      <button className='searchBtn'><HiSearch /></button>
    </form>
  )
}
