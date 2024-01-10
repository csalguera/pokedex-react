// npm modules
import { useContext, useEffect } from "react"

// components
import Header from "../components/PokemonDetails/Header"
import PokemonSprite from "../components/common/PokemonSprite"
import Cry from "../components/PokemonDetails/Cry"
import EvolutionChain from "../components/EvolutionChain/EvolutionChain"
import Version from "../components/Version/Version"
import Generation from "../components/Generation/Generation"
import FlexCenterWrapper from "../components/common/FlexCenterWrapper"
import NextBtn from "../components/PokemonDetails/NextBtn"
import PrevBtn from "../components/PokemonDetails/PrevBtn"
import Loading from "../components/common/Loading"
import Info from "../components/Info/Info"
import Moves from "../components/Moves/Moves"
import MovesProvider from "../context/MovesProvider"

// mui components
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"

// utilities
import { pascalize, validateSpecies } from "../utilities/utilities"

// context
import PokemonDetailsProvider, { PokemonDetailsContext } from "../context/PokemonDetailsProvider"

const PokemonDetails = () => {
  const { pokemonDetails } = useContext(PokemonDetailsContext)

  useEffect(() => {
    if (pokemonDetails && pokemonDetails.name) {
      document.title = `PokéDex - ${pascalize(validateSpecies(pokemonDetails?.name))}`
    }
  }, [pokemonDetails])

  if (!pokemonDetails) return <Loading />
  return (
    <FlexCenterWrapper
      additionalStyles={{
        flexDirection: 'column',
        backgroundColor: 'background.default'
      }}
    >
      <PokemonDetailsProvider>
        <AppBar
          position="static"
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          <Container maxWidth='xl'>
            <FlexCenterWrapper
              additionalStyles={{
                justifyContent: 'space-between',
              }}
            >
              <PrevBtn />
              <NextBtn />
            </FlexCenterWrapper>
          </Container>
        </AppBar>
        <Header />
        <Generation />
        <Version />
        <PokemonSprite
          pokemonDetails={pokemonDetails}
        />
        <Cry
          name={pokemonDetails.name}
        />
        <Info />
        <EvolutionChain />
        <MovesProvider>
          <Moves />
        </MovesProvider>
      </PokemonDetailsProvider>
    </FlexCenterWrapper>
  )
}

export default PokemonDetails