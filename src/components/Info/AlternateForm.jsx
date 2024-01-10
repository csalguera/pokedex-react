// npm modules
import { useContext } from "react"

// mui components
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"
import LinkWrapper from "../common/LinkWrapper"

const AlternateForm = () => {
  const { pokemonSpecies, genPath, genNum } = useContext(PokemonDetailsContext)

  // console.log(pokemonSpecies);

  return (
    <ListItem>
      <ListItemText primary='Forms' />
      {pokemonSpecies?.varieties?.length > 1 &&
        pokemonSpecies?.varieties?.map(variety => (
          <LinkWrapper
            key={variety?.pokemon?.name}
            to={`/${genPath}/${variety?.pokemon?.name}`}
            state={{ ...variety?.pokemon, genNum, genPath }}
          >
          {variety?.pokemon?.name}
          </LinkWrapper>
        ))
      }
      {pokemonSpecies?.varieties?.length === 1 &&
        <ListItemText
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
          primary='None'
        />
      }
    </ListItem>
  )
}

export default AlternateForm