// npm modules
import { Route, Routes } from 'react-router-dom';

// stylesheets
import './App.css';

// pages
import Landing from './pages/Landing';
import Region from './pages/Region';
import PokemonDetails from './pages/PokemonDetails';

// components
import Nav from './components/Nav';

function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='gen-i' element={<Region />} />
        <Route path='gen-i/:pokemonName' element={<PokemonDetails />} />
        <Route path='gen-ii' element={<Region />} />
        <Route path='gen-ii/:pokemonName' element={<PokemonDetails />} />
        <Route path='gen-iii' element={<Region />} />
        <Route path='gen-iii/:pokemonName' element={<PokemonDetails />} />
        <Route path='gen-iv' element={<Region />} />
        <Route path='gen-iv/:pokemonName' element={<PokemonDetails />} />
      </Routes>
    </>
  )
}

export default App;
