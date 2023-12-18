// npm modules
import { useContext } from "react"

// components
import Header from "../components/PokemonDetails/Header"
import PokemonSprite from "../components/common/PokemonSprite"
import Cry from "../components/PokemonDetails/Cry"
import Type from "../components/Type/Type"
import EvolutionChain from "../components/EvolutionChain/EvolutionChain"
import Version from "../components/Version/Version"
import Generation from "../components/Generation/Generation"
import HeaderWrapper from "../components/common/HeaderWrapper"
import FlexCenterWrapper from "../components/common/FlexCenterWrapper"
import NextBtn from "../components/PokemonDetails/NextBtn"
import PrevBtn from "../components/PokemonDetails/PrevBtn"

// mui components
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"

// context
import PokemonDetailsProvider, { PokemonDetailsContext } from "../context/PokemonDetailsProvider"

const PokemonDetails = () => {
  const {
    location,
    pokemonDetails,
  } = useContext(PokemonDetailsContext)

  return (
    <>
      {pokemonDetails ? (
        <FlexCenterWrapper
          additionalStyles={{
            flexDirection: 'column',
          }}
        >
          <PokemonDetailsProvider>
            <AppBar position="static" color="">
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
            <Type />
            <EvolutionChain />
          </PokemonDetailsProvider>
        </FlexCenterWrapper>
      ) : (
        <HeaderWrapper
          otherVariant='h5'
        >
          Loading...
        </HeaderWrapper>
      )}
    </>
  )
}

export default PokemonDetails