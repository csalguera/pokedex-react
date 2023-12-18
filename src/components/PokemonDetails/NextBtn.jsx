// npm modules
import { useContext, useEffect, useState } from "react"

// components
import LinkWrapper from "../common/LinkWrapper"

// mui components
import { Button } from "@mui/material"

// services
import { getPokemonDetails } from "../../services/api-calls"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

// utilities
import { leadingZeros } from "../../utilities/utilities"

const NextBtn = () => {
  const {
    pokemonDetails,
    genPath,
  } = useContext(PokemonDetailsContext)

  const [nextPokemonDetails, setNextPokemonDetails] = useState({})

  useEffect(() => {
    const fetchDetails = async () => {
      if (pokemonDetails.id) {
        const nextPokemonData = await getPokemonDetails(pokemonDetails.id + 1)
        setNextPokemonDetails(nextPokemonData)
      }
    }
    fetchDetails()
  }, [pokemonDetails.id])

  return (
    <LinkWrapper
      to={`/${genPath}/${nextPokemonDetails.name}`}
      state={{ ...nextPokemonDetails, genNum: 1, genPath }}
    >
      <Button>
        {`Next - ${leadingZeros(nextPokemonDetails.id)} ${nextPokemonDetails.name}`}
      </Button>
    </LinkWrapper>
  )
}

export default NextBtn