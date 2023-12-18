// npm modules
import { useContext, useEffect, useState } from "react"

// components
import LinkWrapper from "../common/LinkWrapper"

// mui components
import { Button } from "@mui/material"

// services
import { getPokemonDetails, getPokemonSpecies } from "../../services/api-calls"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

// utilities
import { leadingZeros, determinePath, determineGenNum } from "../../utilities/utilities"

const PrevBtn = () => {
  const {
    pokemonDetails,
    genPath,
    currentGen,
  } = useContext(PokemonDetailsContext)

  const [prevPokemonDetails, setPrevPokemonDetails] = useState({})
  const [prevPokemonSpecies, setPrevPokemonSpecies] = useState({})
  const [prevGenNum, setPrevGenNum] = useState(0)
  const [prevPath, setPrevPath] = useState('')

  useEffect(() => {
    const fetchPrevData = async () => {
      if (pokemonDetails.id) {
        const prevPokemonDetailsData = await getPokemonDetails(pokemonDetails.id - 1)
        setPrevPokemonDetails(prevPokemonDetailsData)
        const prevPokemonSpeciesData = await getPokemonSpecies(pokemonDetails.id - 1)
        setPrevPokemonSpecies(prevPokemonSpeciesData)
      }
    }
    fetchPrevData()
  }, [pokemonDetails.id])

  
  useEffect(() => {
    if (prevPokemonSpecies && prevPokemonSpecies.generation) {
      const genName = prevPokemonSpecies.generation.name
      setPrevPath(determinePath(genName, genPath, currentGen))
      setPrevGenNum(determineGenNum(genName))
    }
  }, [prevPokemonSpecies, prevPokemonSpecies.generation, prevPath, genPath, currentGen])


  return (
    <LinkWrapper
      to={`/${prevPath}/${prevPokemonDetails.name}`}
      state={{ ...prevPokemonDetails, genNum: prevGenNum, prevPath }}
    >
      <Button>
        {`Prev - ${leadingZeros(prevPokemonDetails.id)} ${prevPokemonDetails.name}`}
      </Button>
    </LinkWrapper>
  )
}

export default PrevBtn