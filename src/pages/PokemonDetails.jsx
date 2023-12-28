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

  console.log(pokemonDetails);

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
        <Header />
        <Generation />
        <Version />
        <PokemonSprite
          pokemonDetails={pokemonDetails}
        />
        <Cry
          name={location.state.name}
        />
        <Info />
        <EvolutionChain />
      </PokemonDetailsProvider>
    </FlexCenterWrapper>
  )
}

export default PokemonDetails