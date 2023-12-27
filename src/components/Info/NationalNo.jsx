// npm modules
import { useContext } from "react"

// mui components
import Typography from "@mui/material/Typography"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

// utilities
import { leadingZeros } from "../../utilities/utilities"

const NationalNo = () => {
  const { pokemonDetails } = useContext(PokemonDetailsContext)
  return (
    <ListItem>
      <ListItemText primary='National No.' />
      <Typography
        color='primary'
      >
        {leadingZeros(pokemonDetails?.id)}
      </Typography>
    </ListItem>
  )
}

export default NationalNo