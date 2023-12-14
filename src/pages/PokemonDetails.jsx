// npm modules
import { useContext } from "react"

// components
import Header from "../components/Header"
import PokemonSprite from "../components/PokemonSprite"
import Cry from "../components/buttons/Cry"
import PokemonTypeContainer from "../components/containers/PokemonTypeContainer"
import PokemonEvolutionChain from "../components/evolution-chain/PokemonEvolutionChain"
import VersionSelectorContainer from "../components/containers/VersionSelectorContainer"
import GenerationSelectorContainer from "../components/containers/GenerationSelectorContainer"

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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <PokemonDetailsProvider>
            <Header />
            <GenerationSelectorContainer />
            <VersionSelectorContainer />
            <PokemonSprite
              pokemonDetails={pokemonDetails}
            />
            <Cry
              name={location.state.name}
            />
            <PokemonTypeContainer />
            <PokemonEvolutionChain />
          </PokemonDetailsProvider>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}

export default PokemonDetails