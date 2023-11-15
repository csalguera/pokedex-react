// npm modules
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

// components
import PokemonType from "../components/PokemonType"
import PokemonSprite from "../components/PokemonSprite"
import PokemonEvolutionChain from "../components/evolution-chain/PokemonEvolutionChain"
import VersionSelector from "../components/buttons/VersionSelector"
import GenerationSelectorContainer from "../components/containers/GenerationSelectorContainer"

// services
import { getPokemonDetails, getPokemonSpecies, getEvolutionChainData } from "../services/api-calls"

// utilities
import { leadingZeros, pascalize } from "../utilities/utilities"

const PokemonDetails = () => {
  const location = useLocation()
  const [pokemonDetails, setPokemonDetails] = useState({})
  const [pokemonSpecies, setPokemonSpecies] = useState({})
  const [evolutionChain, setEvolutionChain] = useState({})
  const [spriteVersion, setSpriteVersion] = useState(0)
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '250px'
            }}
          >
            <h1
              style={{
                margin: '8px',
              }}
            >
              {leadingZeros(pokemonDetails.id ?? '')}
            </h1>
            <h1
              style={{
                margin: '8px',
              }}
            >
              {pascalize(pokemonDetails.name ?? '')}
            </h1>
          </div>
          <GenerationSelectorContainer
            pokemonDetails={pokemonDetails}
            genNum={genNum}
          />
          <VersionSelector
            spriteVersion={spriteVersion}
            setSpriteVersion={setSpriteVersion}
            genNum={genNum}
            genPath={genPath}
          />
          <PokemonSprite
            pokemonDetails={pokemonDetails}
            spriteVersion={spriteVersion}
            genPath={genPath}
          />
          {currentGen > 1 && pastTypes?.generation.name === 'generation-i' ? (
            pokemonDetails?.types?.map(type => (
              <PokemonType
                type={type}
                key={type.slot}
              />
            ))
          ) : currentGen <= 5 && pastTypes ? (
            pastTypes?.types?.map(type => (
              <PokemonType
                type={type}
                key={type.slot}
              />
            ))
          ) : (
            pokemonDetails?.types?.map(type => (
              <PokemonType
                type={type}
                key={type.slot}
              />
            ))
          )}
          <PokemonEvolutionChain
            pokemonDetails={pokemonDetails}
            pokemonSpecies={pokemonSpecies}
            evolutionChain={evolutionChain}
            spriteVersion={spriteVersion}
            genNum={genNum}
            genPath={genPath}
            currentGen={currentGen}
          />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}

export default PokemonDetails