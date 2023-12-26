// npm modules
import { useContext, useEffect } from "react"

// components
import Name from "../components/PokemonDetails/Name"
import PokemonSprite from "../components/common/PokemonSprite"
import Cry from "../components/PokemonDetails/Cry"
import Type from "../components/Type/Type"
import EvolutionChain from "../components/EvolutionChain/EvolutionChain"
import Version from "../components/Version/Version"
import Generation from "../components/Generation/Generation"
import FlexCenterWrapper from "../components/common/FlexCenterWrapper"
import NextBtn from "../components/PokemonDetails/NextBtn"
import PrevBtn from "../components/PokemonDetails/PrevBtn"
import Loading from "../components/common/Loading"
import Abilities from "../components/Abilities/Abilities"
import Height from "../components/Height/Height"
import Weight from "../components/Weight/Weight"
import Classification from "../components/Classification/Classification"

// mui components
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"

// context
import PokemonDetailsProvider, { PokemonDetailsContext } from "../context/PokemonDetailsProvider"

// utilities
import { pascalize } from "../utilities/utilities"

const PokemonDetails = () => {
  const {
    location,
    pokemonDetails,
  } = useContext(PokemonDetailsContext)

  useEffect(() => {
    if (pokemonDetails && pokemonDetails.name) {
      document.title = `PokéDex - ${pascalize(pokemonDetails?.name)}`
    }
  }, [pokemonDetails])

  if (!pokemonDetails) return <Loading />
  return (
    <FlexCenterWrapper
      additionalStyles={{
        flexDirection: 'column',
      }}
    >
      <PokemonDetailsProvider>
        <AppBar position="static" sx={{ backgroundColor: 'background.paper' }}>
          <Container maxWidth='xl'>
            <FlexCenterWrapper
              additionalStyles={{
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <PrevBtn />
              <NextBtn />
            </FlexCenterWrapper>
          </Container>
        </AppBar>
        <Name />
        <Classification />
        <Generation />
        <Version />
        <PokemonSprite
          pokemonDetails={pokemonDetails}
        />
        <Cry
          name={location.state.name}
        />
        <Type />
        <Abilities />
        <Height />
        <Weight />
        <EvolutionChain />
      </PokemonDetailsProvider>
    </FlexCenterWrapper>
  )
}

export default PokemonDetails