// npm modules
import { useContext } from "react"

// components
import Ability from "./Ability"
import NoAbility from "./NoAbility"

// mui components
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const Abilities = () => {
  const {
    currentGen,
    pokemonDetails,
  } = useContext(PokemonDetailsContext)

  if (currentGen < 3) return <NoAbility />
  return (
    <>
      <ListItem
        sx={{
          width: '100%',
        }}
      >
        <ListItemText
          primary='Abilities'
          primaryTypographyProps={{
            fontWeight: 600,
            textAlign: 'center',
          }}
        />
      </ListItem>
      {pokemonDetails?.abilities?.map(ability => (
        <Ability
          key={ability.slot}
          ability={ability}
        />
      ))}
    </>
  )
}

export default Abilities