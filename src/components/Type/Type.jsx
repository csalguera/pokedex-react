// npm modules
import { useContext } from "react"

// components
import TypeBadge from "./TypeBadge"

// mui components
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const Type = () => {
  const {
    currentGen,
    pastTypes,
    pokemonDetails,
  } = useContext(PokemonDetailsContext)

  return (
    <ListItem>
      <ListItemText primary='Type' />
      {currentGen > 1 && pastTypes?.generation.name === 'generation-i' ? (
        pokemonDetails?.types?.map(type => (
          <TypeBadge
            key={type.slot}
            type={type.type}
          />
        ))
      ) : currentGen <= 5 && pastTypes ? (
        pastTypes?.types?.map(type => (
          <TypeBadge
            key={type.slot}
            type={type.type}
          />
        ))
      ) : (
        pokemonDetails?.types?.map(type => (
          <TypeBadge
            key={type.slot}
            type={type.type}
          />
        ))
      )}
    </ListItem>
  )
}

export default Type