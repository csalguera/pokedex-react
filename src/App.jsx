import './App.css';

import { Route, Routes } from 'react-router-dom';

// pages
import Landing from './pages/Landing';
import Kanto from './pages/Kanto';
import Johto from './pages/Johto';
import Hoenn from './pages/Hoenn';
import PokemonDetails from './pages/PokemonDetails';

// components
import Nav from './components/Nav';

function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='gen-i' element={<Kanto />} />
        <Route path='gen-i/:pokemonName' element={<PokemonDetails />} />
        <Route path='gen-ii' element={<Johto />} />
        <Route path='gen-ii/:pokemonName' element={<PokemonDetails />} />
        <Route path='gen-iii' element={<Hoenn />} />
        <Route path='gen-iii/:pokemonName' element={<PokemonDetails />} />
      </Routes>
    </>
  )
}

export default App;
