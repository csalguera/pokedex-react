// npm modules
import { useState, createContext } from 'react';

// mui modules
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import { blue, grey, red, yellow } from '@mui/material/colors';

// context
export const PokemonThemeContext = createContext()

const blueTheme = createTheme({
  palette: {
    primary: {
      main: blue[600],
      dark: blue[900],
      contrastText: grey[100],
    },
    text: {
      secondary: grey[100],
    },
    background: {
      default: grey[100],
      paper: grey[900],
      border: grey[200],
      search: grey[100],
    },
  }
})

const yellowTheme = createTheme({
  palette: {
    primary: {
      main: yellow[600],
      dark: yellow[700],
      contrastText: grey[900],
    },
    text: {
      primary: grey[100],
      secondary: grey[100],
    },
    background: {
      default: grey[900],
      paper: grey[800],
      border: grey[800],
      search: grey[900],
    },
  }
})

const redTheme = createTheme({
  palette: {
    primary: {
      main: red[600],
      dark: red[900],
      contrastText: grey[100],
    },
    text: {
      primary: grey[100],
      secondary: grey[100],
    },
    background: {
      default: grey[900],
      paper: grey[800],
      border: grey[800],
      search: grey[100],
    },
  }
})

const PokemonThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(blueTheme)

  const changeTheme = (color) => {
    switch (color) {
      case 'blue':
        setTheme(blueTheme)
        break
      case 'yellow':
        setTheme(yellowTheme)
        break
      case 'red':
        setTheme(redTheme)
        break
      default: 
        return blueTheme
    }
  }

  const contextValues = {
    theme,
    changeTheme,
    blueTheme,
    yellowTheme,
    redTheme,
  }

  return (
    <PokemonThemeContext.Provider
      value={contextValues}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </PokemonThemeContext.Provider>
  )
}

export default PokemonThemeProvider