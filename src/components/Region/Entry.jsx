// npm modules
import { useEffect, useState } from "react"

// components
import FlexCenterWrapper from "../common/FlexCenterWrapper"
import ListItemTextWrapper from "../common/ListItemTextWrapper"
import LinkWrapper from "../common/LinkWrapper"
import Type from "../Type/Type"

// mui components
import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"

// services
import { getPokemonDetails } from "../../services/api-calls"

// utilities
import { leadingZeros, pascalize, validateSpecies } from "../../utilities/utilities"

const Entry = (props) => {
  const {
    pokemon,
    idx,
    location,
    resultId,
    genPath,
    genNum,
  } = props

  const { dexOffset } = location.state

  const [entry, setEntry] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = await getPokemonDetails(pokemon.name)
      setEntry(pokemonData)
    }
    fetchData()
  }, [pokemon.name])

  return (
    <>
      <ListItem>
        <ListItemTextWrapper>
          {resultId ? (
            leadingZeros(resultId)
          ) : (
            leadingZeros(dexOffset + idx + 1)
          )}
        </ListItemTextWrapper>
        <ListItemTextWrapper>
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
        </ListItemTextWrapper>
        <ListItemTextWrapper>
          <FlexCenterWrapper
            additionalStyles={{
              justifyContent: 'flex-start'
            }}
          >
            <Type pokemonDetails={entry} />
          </FlexCenterWrapper>
        </ListItemTextWrapper>
      </ListItem>
      <Divider />
    </>
  )
}

export default Entry