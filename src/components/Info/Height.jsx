// npm modules
import { useContext } from "react"

// mui components
import Typography from "@mui/material/Typography"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const Height = () => {
  const { pokemonDetails } = useContext(PokemonDetailsContext)

  return (
    <ListItem>
      <ListItemText primary='Height' />
      <Typography
        color='primary'
      >
        {`${pokemonDetails?.height / 10}m`}
      </Typography>
    </ListItem>
  )
}

export default Height