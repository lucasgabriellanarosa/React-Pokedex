import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import { PokemonPage } from '../PokemonPage/PokemonPage';

export const Roots = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route path='/pokemon/' element={ <PokemonPage /> } />
        </Routes>
    </BrowserRouter>
  )
}
