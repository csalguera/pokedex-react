// npm modules
import { useContext } from "react"

// mui components
import { Box } from "@mui/material"

// context
import { PokemonThemeContext } from "../../context/PokemonThemeProvider"

const ThemeImageWrapper = ({ src, alt, width, disabled, color }) => {
  const { changeTheme } = useContext(PokemonThemeContext)

  return (
    <Box
      component='img'
      sx={{
        filter: disabled ? "grayscale(1)" : "grayscale(0)",
        transition: "1s ease",
      }}
      src={src}
      alt={alt || ''}
      width={width}
      onClick={() => changeTheme(color)}
    />
  )
}

export default ThemeImageWrapper