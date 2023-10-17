import './App.css';

import { Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing';
import Pokemon from './pages/PokemonList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='pokemon' element={<Pokemon />} />
    </Routes>
  )
}

export default App;
