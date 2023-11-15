// npm modules
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

// components
import PokemonType from "../components/PokemonType"
import PokemonSprite from "../components/PokemonSprite"
import PokemonEvolutionChain from "../components/PokemonEvolutionChain"
import SpriteVersionSelector from "../components/SpriteVersionSelector"
import GenerationSelector from "../components/GenerationSelector"

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
          <GenerationSelector
            pokemonDetails={pokemonDetails}
            pokemonSpecies={pokemonSpecies}
            genNum={genNum}
          />
          <SpriteVersionSelector
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
          {genNum <= 5 && pokemonDetails?.past_types?.[0] ? (
            pokemonDetails?.past_types?.[0]?.types?.map(type => (
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
          />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}

export default PokemonDetails