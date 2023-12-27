// npm modules
import { useContext } from "react"

// mui components
import Typography from "@mui/material/Typography"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

// utilities
import { removeHyphens } from "../../utilities/utilities"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"
import { Divider } from "@mui/material"

const Ability = (props) => {
  const {
    ability,
  } = props

  const {
    currentGen,
  } = useContext(PokemonDetailsContext)

  const slot3 = (ability.slot === 3)

  if (ability.is_hidden && currentGen < 5) return
  return (
    <>
      <ListItem>
        <ListItemText primary={slot3 ? 'Hidden' : `Slot ${ability.slot}`} />
        <Typography
          color='primary'
        >
          {removeHyphens(ability.ability.name)}
        </Typography>
      </ListItem>
      <Divider />
    </>
  )
}

export default Ability