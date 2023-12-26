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
import { leadingZeros, determinePath, determineGenNum, validateSpecies } from "../../utilities/utilities"

// other
import { pages } from "../Nav/Nav"

const NextBtn = () => {
  const {
    pokemonDetails,
    currentGen,
    genPath,
  } = useContext(PokemonDetailsContext)

  const [nextPokemonDetails, setNextPokemonDetails] = useState({})
  const [nextPokemonSpecies, setNextPokemonSpecies] = useState({})
  const [nextGenNum, setNextGenNum] = useState(0)
  const [nextPath, setNextPath] = useState('')
  const finalPage = pages[pages.length - 1]
  const offset = finalPage.dexOffset
  const limit = finalPage.dexLimit
  const finalId = offset + limit

  useEffect(() => {
    const fetchNextData = async () => {
      if (pokemonDetails.id) {
        const nextPokemonDetailsData = await getPokemonDetails(pokemonDetails.id + 1)
        setNextPokemonDetails(nextPokemonDetailsData)
        const nextPokemonSpeciesData = await getPokemonSpecies(pokemonDetails.id + 1)
        setNextPokemonSpecies(nextPokemonSpeciesData)
      }
    }
    fetchNextData()
  }, [pokemonDetails.id])

  useEffect(() => {
    if (nextPokemonSpecies && nextPokemonSpecies.generation) {
      const genName = nextPokemonSpecies.generation.name
      setNextPath(determinePath(genName, genPath, currentGen))
      setNextGenNum(determineGenNum(genName))
    }
  }, [nextPokemonSpecies, nextPokemonSpecies.generation, nextPath, genPath, currentGen])

  if (pokemonDetails.id === finalId) return

  return (
    <LinkWrapper
      to={`/${nextPath}/${nextPokemonDetails.name}`}
      state={{ ...nextPokemonDetails, genNum: nextGenNum, nextPath }}
    >
      <Button sx={{ color: 'primary.contrastText' }}>
        {`Next - ${leadingZeros(nextPokemonDetails.id)} ${validateSpecies(nextPokemonDetails.name)}`}
      </Button>
    </LinkWrapper>
  )
}

export default NextBtn