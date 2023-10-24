import './App.css';

import { Route, Routes } from 'react-router-dom';

// pages
import Landing from './pages/Landing';
import GenerationI from './pages/GenerationI';
import GenerationII from './pages/GenerationII';
import PokemonDetails from './pages/PokemonDetails';

// components
import Nav from './components/Nav';

function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='gen-i' element={<GenerationI />} />
        <Route path='gen-i/:pokemonName' element={<PokemonDetails />} />
        <Route path='gen-ii' element={<GenerationII />} />
        <Route path='gen-ii/:pokemonName' element={<PokemonDetails />} />
      </Routes>
    </>
  )
}

export default App;
