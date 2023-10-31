// npm modules
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

// components
import PokemonType from "../components/PokemonType"
import PokemonSprite from "../components/PokemonSprite"
import PokemonEvolutionChain from "../components/PokemonEvolutionChain"
import SpriteVersionSelector from "../components/SpriteVersionSelector"

// services
import { getPokemonDetails, getPokemonSpecies, getEvolutionChainData } from "../services/api-calls"

// utilities
import { pascalize } from "../utilities/pascalize"

const PokemonDetails = () => {
  const [pokemonDetails, setPokemonDetails] = useState({})
  const [pokemonSpecies, setPokemonSpecies] = useState({})
  const [evolutionChain, setEvolutionChain] = useState({})
  const [generation, setGeneration] = useState(0)
  const [spriteVersion, setSpriteVersion] = useState(0)
  const location = useLocation()

  const gen1 = (location.pathname.includes('/gen-i/'))
  const gen2 = (location.pathname.includes('/gen-ii/'))

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
      ) : (
        setGeneration(0)
      )
    }
    fetchGeneration()
  }, [gen1, gen2])

  const stageOne = (evolutionChain.chain?.species)
  const stageTwo = (evolutionChain.chain?.evolves_to[0]?.species)
  const stageThree = (evolutionChain.chain?.evolves_to[0]?.evolves_to[0]?.species)

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
          <h1>{pascalize(pokemonDetails.name ?? '')}</h1>
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
          {pokemonDetails?.types?.map(type => (
            <PokemonType
              type={type}
              key={type.slot}
            />
          ))}
          <PokemonEvolutionChain
            stageOne={stageOne}
            stageTwo={stageTwo}
            stageThree={stageThree}
            pokemonSpecies={pokemonSpecies}
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