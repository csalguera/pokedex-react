// npm modules
import { useContext, useEffect, useState } from "react"

// components
import LinkWrapper from "../common/LinkWrapper"

// mui components
import { Button } from "@mui/material"

// services
import { getPokemonDetails, getPokemonSpecies } from "../../services/api-calls"

// utilities
import { leadingZeros, determinePath, determineGenNum, mapToSpecies } from "../../utilities/utilities"
import { pages } from "../../utilities/data"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const NextBtn = () => {
  const {
    pokemonDetails,
    pokemonSpecies,
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
      if (pokemonSpecies.id) {
        const nextPokemonDetailsData = await getPokemonDetails(pokemonSpecies.id + 1)
        setNextPokemonDetails(nextPokemonDetailsData)
        const nextPokemonSpeciesData = await getPokemonSpecies(pokemonSpecies.id + 1)
        setNextPokemonSpecies(nextPokemonSpeciesData)
      }
    }
    fetchNextData()
  }, [pokemonSpecies.id])

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
      <Button sx={{ color: 'text.secondary' }}>
        {`Next - ${leadingZeros(nextPokemonDetails.id)} ${mapToSpecies(nextPokemonDetails.name)}`}
      </Button>
    </LinkWrapper>
  )
}

export default NextBtn