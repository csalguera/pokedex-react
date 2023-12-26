// mui components
import { Typography } from "@mui/material"

// utilities
import { removeHyphens } from "../../utilities/utilities"

const Ability = (props) => {
  const { ability } = props

  if (ability.is_hidden) return
  return (
    <Typography
      color='primary'
    >
      {removeHyphens(ability.ability.name)}
    </Typography>
  )
}

export default Ability