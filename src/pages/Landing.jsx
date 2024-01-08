// npm modules
import { useContext } from "react"

// components
import FlexCenterWrapper from "../components/common/FlexCenterWrapper"
import HeaderWrapper from "../components/common/HeaderWrapper"
import ThemeImageWrapper from "../components/common/ThemeImageWrapper"

// context
import { PokemonThemeContext } from "../context/PokemonThemeProvider"

const Landing = () => {
  const {
    theme,
    blueTheme,
    yellowTheme,
    redTheme,
  } = useContext(PokemonThemeContext)

  return (
    <>
      <HeaderWrapper>
        PokéDex
      </HeaderWrapper>
      <FlexCenterWrapper>
        <ThemeImageWrapper
          src='/assets/logos/team-mystic-logo.png'
          width={300}
          color='blue'
          disabled={theme === blueTheme}
          />
        <ThemeImageWrapper
          src='/assets/logos/team-instinct-logo.png'
          width={300}
          color='yellow'
          disabled={theme === yellowTheme}
          />
        <ThemeImageWrapper
          src='/assets/logos/team-valor-logo.png'
          width={300}
          color='red'
          disabled={theme === redTheme}
        />
      </FlexCenterWrapper>
    </>
  )
}

export default Landing