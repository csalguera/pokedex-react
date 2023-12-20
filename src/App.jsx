// npm modules
import { Route, Routes } from 'react-router-dom';

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

// components
import Nav from './components/Nav/Nav';

// mui modules
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

// context
import PokemonDetailsProvider from './context/PokemonDetailsProvider';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[600],
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
          <CssBaseline>
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
              <Route path='gen-v' element={<Region />} />
              <Route path='gen-v/:pokemonName' element={<PokemonDetails />} />
            </Routes>
          </CssBaseline>
        </PokemonDetailsProvider>
      </ThemeProvider>
    </>
  )
}

export default App;