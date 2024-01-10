// npm modules
import { useContext, useEffect, useState } from "react"

// components
import LinkWrapper from "../common/LinkWrapper"

// mui components
import { Button } from "@mui/material"

// services
import { getPokemonDetails, getPokemonSpecies } from "../../services/api-calls"

// utilities
import { leadingZeros, determinePath, determineGenNum, validateSpecies } from "../../utilities/utilities"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const PrevBtn = () => {
  const {
    pokemonDetails,
    pokemonSpecies,
    genPath,
    currentGen,
  } = useContext(PokemonDetailsContext)

  const [prevPokemonDetails, setPrevPokemonDetails] = useState({})
  const [prevPokemonSpecies, setPrevPokemonSpecies] = useState({})
  const [prevGenNum, setPrevGenNum] = useState(0)
  const [prevPath, setPrevPath] = useState('')

  useEffect(() => {
    const fetchPrevData = async () => {
      if (pokemonSpecies.id && pokemonSpecies.id !== 1) {
        const prevPokemonDetailsData = await getPokemonDetails(pokemonSpecies.id - 1)
        setPrevPokemonDetails(prevPokemonDetailsData)
        const prevPokemonSpeciesData = await getPokemonSpecies(pokemonSpecies.id - 1)
        setPrevPokemonSpecies(prevPokemonSpeciesData)
      }
    }
    fetchPrevData()
  }, [pokemonSpecies.id])

  
  useEffect(() => {
    if (prevPokemonSpecies && prevPokemonSpecies.generation) {
      const genName = prevPokemonSpecies.generation.name
      setPrevPath(determinePath(genName, genPath, currentGen))
      setPrevGenNum(determineGenNum(genName))
    }
  }, [prevPokemonSpecies, prevPokemonSpecies.generation, prevPath, genPath, currentGen])

  if (pokemonDetails.id === 1) return <div></div>

  return (
    <LinkWrapper
      to={`/${prevPath}/${prevPokemonDetails.name}`}
      state={{ ...prevPokemonDetails, genNum: prevGenNum, prevPath }}
    >
      <Button sx={{ color: 'text.secondary' }}>
        {`Prev - ${leadingZeros(prevPokemonDetails.id)} ${validateSpecies(prevPokemonDetails.name)}`}
      </Button>
    </LinkWrapper>
  )
}

export default PrevBtn