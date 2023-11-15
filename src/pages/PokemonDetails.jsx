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
  const [pokemonDetails, setPokemonDetails] = useState({})
  const [pokemonSpecies, setPokemonSpecies] = useState({})
  const [evolutionChain, setEvolutionChain] = useState({})
  const [generation, setGeneration] = useState(0)
  const [spriteVersion, setSpriteVersion] = useState(0)
  const location = useLocation()

  const gen1 = (location.pathname.includes('/gen-i/'))
  const gen2 = (location.pathname.includes('/gen-ii/'))
  const gen3 = (location.pathname.includes('/gen-iii/'))
  const gen4 = (location.pathname.includes('/gen-iv/'))
  const gen5 = (location.pathname.includes('/gen-v/'))

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
    const fetchGeneration = () => {
      gen1 ? (
        setGeneration(1)
      ) : gen2 ? (
        setGeneration(2)
      ) : gen3 ? (
        setGeneration(3)
      ) : (
        setGeneration(0)
      )
    }
    fetchGeneration()
  }, [gen1, gen2, gen3])

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
          />
          <SpriteVersionSelector
            generation={generation}
            spriteVersion={spriteVersion}
            setSpriteVersion={setSpriteVersion}
          />
          <PokemonSprite
            pokemonDetails={pokemonDetails}
            path={location.pathname}
            spriteVersion={spriteVersion}
          />
          {generation <= 5 && pokemonDetails?.past_types?.[0] ? (
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
          />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}

export default PokemonDetails