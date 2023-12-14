// npm modules
import { useState, useEffect, createContext } from "react"
import { useLocation } from "react-router-dom"

// components
import Header from "../components/Header"
import PokemonSprite from "../components/PokemonSprite"
import Cry from "../components/buttons/Cry"
import PokemonTypeContainer from "../components/containers/PokemonTypeContainer"
import PokemonEvolutionChain from "../components/evolution-chain/PokemonEvolutionChain"
import VersionSelectorContainer from "../components/containers/VersionSelectorContainer"
import GenerationSelectorContainer from "../components/containers/GenerationSelectorContainer"

// services
import { getPokemonDetails, getPokemonSpecies, getEvolutionChainData } from "../services/api-calls"

// context
export const GenerationSelectorContainerContext = createContext()
export const VersionSelectorContainerContext = createContext()
export const PokemonSpriteContext = createContext()
export const PokemonEvolutionChainContext = createContext()

const PokemonDetails = () => {
  const location = useLocation()
  const [pokemonDetails, setPokemonDetails] = useState({})
  const [pokemonSpecies, setPokemonSpecies] = useState({})
  const [evolutionChain, setEvolutionChain] = useState({})
  const [spriteGen1, setSpriteGen1] = useState(0)
  const [spriteGen2, setSpriteGen2] = useState(0)
  const [spriteGen3, setSpriteGen3] = useState(0)
  const [spriteGen4, setSpriteGen4] = useState(0)
  const [genPath, setGenPath] = useState(location.state.genPath)
  const { genNum } = location.state
  const pastTypes = (pokemonDetails?.past_types?.[0])
  
  let currentGen

  switch (genPath) {
    case 'gen-i':
      currentGen = 1
      break;
    case 'gen-ii':
      currentGen = 2
      break;
    case 'gen-iii':
      currentGen = 3
      break;
    case 'gen-iv':
      currentGen = 4
      break;
    default:
      currentGen = 0
      break;
  }

  useEffect(() => {
    const fetchDetails = async () => {
      const pokemonData = await getPokemonDetails(location.state.name)
      setPokemonDetails(pokemonData)
    }
    fetchDetails()
  }, [location.state.name])

  useEffect(() => {
    const fetchPokemonSpecies = async () => {
      const pokemonSpeciesData = await getPokemonSpecies(location.state.name)
      setPokemonSpecies(pokemonSpeciesData)
    }
    fetchPokemonSpecies()
  }, [location.state.name])

  useEffect(() => {
    const fetchEvolutionChain = async () => {
      if (pokemonSpecies && pokemonSpecies.evolution_chain) {
        const evolutionChainData = await getEvolutionChainData(pokemonSpecies.evolution_chain.url)
        setEvolutionChain(evolutionChainData)
      }
    }
    fetchEvolutionChain()
  }, [pokemonSpecies, pokemonSpecies.evolution_chain])

  useEffect(() => {
    const updateGenPath = () => {
      const newPath = (location.pathname.replace(`/${pokemonDetails.name}`, '').replace('/', ''))
      setGenPath(newPath)
    }
    updateGenPath()
  }, [location.pathname, pokemonDetails.name])

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
          <Header pokemonDetails={pokemonDetails} />
          <GenerationSelectorContainerContext.Provider
            value={{
              pokemonDetails,
              genNum,
            }}
          >
            <GenerationSelectorContainer />
          </GenerationSelectorContainerContext.Provider>
          <VersionSelectorContainerContext.Provider
            value={{
              genPath,
              setSpriteGen1,
              setSpriteGen2,
              setSpriteGen3,
              setSpriteGen4,
            }}
          >
            <VersionSelectorContainer />
          </VersionSelectorContainerContext.Provider>
          <PokemonSprite
            pokemonDetails={pokemonDetails}
            spriteGen1={spriteGen1}
            spriteGen2={spriteGen2}
            spriteGen3={spriteGen3}
            spriteGen4={spriteGen4}
            genPath={genPath}
          />
          <Cry
            name={location.state.name}
          />
          <PokemonTypeContainer
            currentGen={currentGen}
            pastTypes={pastTypes}
            pokemonDetails={pokemonDetails}
          />
          <PokemonEvolutionChainContext.Provider
            value={{
              pokemonDetails,
              pokemonSpecies,
              evolutionChain,
              spriteGen1,
              spriteGen2,
              spriteGen3,
              spriteGen4,
              genNum,
              genPath,
              currentGen,
            }}
          >
            <PokemonEvolutionChain />
          </PokemonEvolutionChainContext.Provider>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}

export default PokemonDetails