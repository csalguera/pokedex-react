import './App.css';

import { Route, Routes } from 'react-router-dom';

// pages
import Landing from './pages/Landing';
import Pokemon from './pages/GenerationI';

// components
import Nav from './components/Nav';

function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='gen-i' element={<Pokemon />} />
      </Routes>
    </>
  )
}

export default App;
