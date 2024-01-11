// npm modules
import { Route, Routes } from 'react-router-dom';
import React from 'react';

// stylesheets
import './App.css';

// fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// pages
import Landing from './pages/Landing';
import Region from './pages/Region';
import PokemonDetails from './pages/PokemonDetails';
import Results from './pages/Results';

// components
import Nav from './components/Nav/Nav';

// utilities
import { pages } from './utilities/data';

// context
import PokemonThemeProvider from './context/PokemonThemeProvider';
import PokemonDetailsProvider from './context/PokemonDetailsProvider';

function App() {
  return (
    <>
      <PokemonThemeProvider>
        <PokemonDetailsProvider>
          <Nav />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='results' element={<Results />} />
            {pages.map(page => (
              <React.Fragment key={page.genPath}>
                <Route path={page.genPath} element={<Region />} />
                <Route path={`${page.genPath}/:pokemonName`} element={<PokemonDetails />} />
              </React.Fragment>
            ))}
          </Routes>
        </PokemonDetailsProvider>
      </PokemonThemeProvider>
    </>
  )
}

export default App;