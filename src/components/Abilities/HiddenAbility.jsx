// npm modules
import { useContext } from "react"

// mui components
import Typography from "@mui/material/Typography"

// utilities
import { removeHyphens } from "../../utilities/utilities"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const HiddenAbility = (props) => {
  const { ability } = props
  const { currentGen } = useContext(PokemonDetailsContext)

  if (!ability.is_hidden || currentGen < 5) return
  return (
    <>
      <Typography
        color='primary'
      >
        {removeHyphens(ability.ability.name)}
      </Typography>
      <Typography
        sx={{ ml: 0.25 }}
      >
        {`(Hidden)`}
      </Typography>
    </>
  )
}

export default HiddenAbility