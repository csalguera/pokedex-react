// npm modules
import { useContext } from "react"

// mui components
import Typography from "@mui/material/Typography"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

// utilities
import { pascalize } from "../../utilities/utilities"

const Name = () => {
  const { pokemonDetails } = useContext(PokemonDetailsContext)

  return (
    <ListItem>
      <ListItemText primary='Name' />
      <Typography
        color='primary'
      >
        {pascalize(pokemonDetails?.name ?? '')}
      </Typography>
    </ListItem>
  )
}

export default Name