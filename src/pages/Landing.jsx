// npm modules
import { useContext, useEffect } from "react"

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

  useEffect(() => {
    document.title = `PokéDex`
  }, [])

  return (
    <>
      <HeaderWrapper>
        PokéDex
      </HeaderWrapper>
      <HeaderWrapper
        otherVariant='h6'
      >
        Welcome to this pokedex app.
      </HeaderWrapper>
      <HeaderWrapper
        otherVariant='h6'
      >
        Choose a color theme:
      </HeaderWrapper>
      <FlexCenterWrapper>
        <ThemeImageWrapper
          src='/assets/logos/team-mystic-logo.png'
          alt='articuno-blue-theme'
          width={300}
          color='blue'
          disabled={theme !== blueTheme}
          />
        <ThemeImageWrapper
          src='/assets/logos/team-instinct-logo.png'
          alt='zapdos-yellow-theme'
          width={300}
          color='yellow'
          disabled={theme !== yellowTheme}
          />
        <ThemeImageWrapper
          src='/assets/logos/team-valor-logo.png'
          alt='moltres-red-theme'
          width={300}
          color='red'
          disabled={theme !== redTheme}
        />
      </FlexCenterWrapper>
    </>
  )
}

export default Landing