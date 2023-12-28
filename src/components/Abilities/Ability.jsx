// environment variables
import { baseURL } from "../../services/api-calls"

// npm modules
import { useContext, useEffect, useState } from "react"

// mui components
import Typography from "@mui/material/Typography"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"

// utilities
import { removeHyphens } from "../../utilities/utilities"

// services
import { getAbility } from "../../services/api-calls"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const Ability = (props) => {
  const {
    abilityEl,
  } = props

  const {
    currentGen,
  } = useContext(PokemonDetailsContext)

  const [ability, setAbility] = useState({})

  const slot3 = (abilityEl.slot === 3)
  const abilityGen = parseInt(ability?.generation?.url.replace(`${baseURL}/generation`, '').replace('/', ''))

  useEffect(() => {
    const fetchAbility = async () => {
      if (abilityEl && abilityEl.ability.name) {
        const abilityData = await getAbility(abilityEl.ability.name)
        setAbility(abilityData)
      }
    }
    fetchAbility()
  }, [abilityEl, abilityEl.ability.name])

  if (abilityEl.is_hidden && currentGen < 5) return
  if (abilityGen > currentGen) return
  return (
    <>
      <ListItem>
        <ListItemText primary={slot3 ? 'Hidden' : `Slot ${abilityEl.slot}`} />
        <Typography
          color='primary'
        >
          {removeHyphens(abilityEl.ability.name)}
        </Typography>
      </ListItem>
      <Divider />
    </>
  )
}

export default Ability