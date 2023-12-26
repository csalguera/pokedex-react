// npm modules
import { useContext } from "react"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"
import { Typography } from "@mui/material"

// utilities
import { removeHyphens } from "../../utilities/utilities"

const Ability = () => {
  const {
    currentGen,
    pokemonDetails,
  } = useContext(PokemonDetailsContext)

  if (currentGen < 3) return
  return (
    <>
      {pokemonDetails?.abilities?.map(ability => (
        <Typography
          key={ability.slot}
          color='primary'
        >
          {removeHyphens(ability.ability.name)}
        </Typography>
      ))}
    </>
  )
}

export default Ability