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

// mui modules
import { createTheme, ThemeProvider } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

// utilities
import { pages } from './utilities/pages';

// context
import PokemonDetailsProvider from './context/PokemonDetailsProvider';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[600],
      dark: blue[900],
      contrastText: grey[100],
    },
    background: {
      default: grey[100],
      paper: grey[900],
      border: grey[200],
    },
  }
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  )
}

export default App;