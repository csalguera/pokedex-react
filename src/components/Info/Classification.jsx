// npm modules
import { useContext } from "react"

// mui components
import Typography from "@mui/material/Typography"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const Classification = () => {
  const { pokemonSpecies } = useContext(PokemonDetailsContext)

  return (
    <ListItem>
      <ListItemText primary='Classification' />
      <Typography
        color='primary'
      >
        {pokemonSpecies?.genera?.[7]?.genus ?? ''}
      </Typography>
    </ListItem>
  )
}

export default Classification