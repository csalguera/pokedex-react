// environment variables
import { baseURL } from "../services/api-calls";

// npm modules
import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// services
import { getPokemonDetails, getPokemonSpecies, getEvolutionChainData } from "../services/api-calls"

// utilities
import { pages } from "../utilities/data";

// context
export const PokemonDetailsContext = createContext()

const PokemonDetailsProvider = ({ children }) => {
  const location = useLocation()
  const spritesInitialState = pages.reduce((acc, page) => {
    acc[`spriteGen${page.genNum}`] = 0
    return acc
  }, {})

  const [pokemonDetails, setPokemonDetails] = useState({})
  const [pokemonSpecies, setPokemonSpecies] = useState({})
  const [evolutionChain, setEvolutionChain] = useState({})
  const [sprites, setSprites] = useState(spritesInitialState)
  const [genPath, setGenPath] = useState('')
  const { genNum } = location.state || {}

  const updateSprites = (key, value) => {
    setSprites(prevState => ({
      ...prevState,
      [key]: value,
    }))
  }

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
    case 'gen-v':
      currentGen = 5
      break;
    default:
      currentGen = 0
      break;
  }

  useEffect(() => {
    const fetchDetails = async () => {
      if (location.state?.name) {
        const pokemonData = await getPokemonDetails(location.state?.name)
        setPokemonDetails(pokemonData)
      }
    }
    fetchDetails()
  }, [location.state?.name])

  useEffect(() => {
    const fetchPokemonSpecies = async () => {
      if (location.state?.name) {
        const pokemonSpeciesData = await getPokemonSpecies(location.state?.name)
        setPokemonSpecies(pokemonSpeciesData)
      }
    }
    fetchPokemonSpecies()
  }, [location.state?.name])

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
      const newPath = (location?.pathname.replace(`/${pokemonDetails.name}`, '').replace('/', ''))
      setGenPath(newPath)
    }
    updateGenPath()
  }, [location.pathname, pokemonDetails.name])

  useEffect(() => {
    const pastAbilities = [
      {
        abilities: [
          {
            ability: {
              name: 'early-bird',
              url: `${baseURL}/ability/48/`
            },
            is_hidden: false,
            slot: 2
          }
        ],
        generation: {
          name: 'generation-viii',
          url: `${baseURL}/generation/8/`
        }
      }
    ]

    if (pokemonDetails.name === 'shiftry') {
      pokemonDetails.past_abilities = pastAbilities
    }
  }, [pokemonDetails])

  useEffect(() => {
    const futureAbilities = [
      {
        abilities: [
          {
            ability: {
              name: 'drizzle',
              url: `${baseURL}/ability/2/`
            },
            is_hidden: false,
            slot: 2
          }
        ],
        generation: {
          name: 'generation-iv',
          url: `${baseURL}/generation/4/`
        }
      }
    ]

    if (pokemonDetails.name === 'pelipper') {
      pokemonDetails.future_abilities = futureAbilities
    }
  }, [pokemonDetails])

  useEffect(() => {
    const futureAbilities = [
      {
        abilities: [
          {
            ability: {
              name: 'drought',
              url: `${baseURL}/ability/70/`
            },
            is_hidden: false,
            slot: 2
          }
        ],
        generation: {
          name: 'generation-iv',
          url: `${baseURL}/generation/4/`
        }
      }
    ]

    if (pokemonDetails.name === 'torkoal') {
      pokemonDetails.future_abilities = futureAbilities
    }
  }, [pokemonDetails])

  const contextValues = {
    location,
    pokemonDetails,
    setPokemonDetails,
    pokemonSpecies,
    setPokemonSpecies,
    evolutionChain,
    setEvolutionChain,
    genPath,
    setGenPath,
    genNum,
    currentGen,
    sprites,
    updateSprites,
  }

  return (
    <PokemonDetailsContext.Provider
      value={contextValues}
    >
      {children}
    </PokemonDetailsContext.Provider>
  )
}

export default PokemonDetailsProvider