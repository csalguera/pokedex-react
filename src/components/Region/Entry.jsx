// components
import FlexCenterWrapper from "../common/FlexCenterWrapper"
import LinkWrapper from "../common/LinkWrapper"

// mui components
import { Typography } from "@mui/material"

// utilities
import { leadingZeros, pascalize, validateSpecies } from "../../utilities/utilities"

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

  return (
    <FlexCenterWrapper
      key={pokemon.name}
    >
      <FlexCenterWrapper
        additionalStyles={{
          justifyContent: 'flex-start',
          width: '175px',
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
      </FlexCenterWrapper>
    </FlexCenterWrapper>
  )
}

export default Entry