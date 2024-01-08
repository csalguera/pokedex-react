// components
import FlexCenterWrapper from "../common/FlexCenterWrapper"
import LinkWrapper from "../common/LinkWrapper"
import Type from "../Type/Type"

// mui components
import { Typography } from "@mui/material"

// utilities
import { leadingZeros, pascalize, validateSpecies } from "../../utilities/utilities"
import { useEffect, useState } from "react"
import { getPokemonDetails } from "../../services/api-calls"

const Entry = (props) => {
  const {
    pokemon,
    idx,
    location,
  } = props

  const {
    dexOffset,
    genPath,
    genNum,
  } = location.state

  const [entry, setEntry] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await getPokemonDetails(pokemon.name)
      setEntry(pokemonData)
    }
    fetchData()
  }, [pokemon.name])

  return (
    <FlexCenterWrapper
      key={pokemon.name}
    >
      <FlexCenterWrapper
        additionalStyles={{
          justifyContent: 'flex-start',
          width: '500px',
        }}
      >
        <Typography
          sx={{
            m: 1,
          }}
        >
          {leadingZeros(dexOffset + idx + 1)}
        </Typography>
        <LinkWrapper
          to={`/${genPath}/${pokemon.name}`}
          state={{ ...pokemon, genNum, genPath }}
          sx={{
            display: 'flex',
            width: 'fit-content',
          }}
        >
          {pascalize(validateSpecies(pokemon.name))}
        </LinkWrapper>
        <Type pokemonDetails={entry} />
      </FlexCenterWrapper>
    </FlexCenterWrapper>
  )
}

export default Entry