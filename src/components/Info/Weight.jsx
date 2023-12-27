// npm modules
import { useContext } from "react"

// mui components
import Typography from "@mui/material/Typography"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const Weight = () => {
  const { pokemonDetails } = useContext(PokemonDetailsContext)

  return (
    <ListItem>
      <ListItemText primary='Weight' />
      <Typography
        color='primary'
      >
        {`${pokemonDetails?.weight / 10}kg`}
      </Typography>
    </ListItem>
  )
}

export default Weight