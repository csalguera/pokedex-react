// npm modules
import { useContext } from "react"

// mui components
import Typography from "@mui/material/Typography"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const Weight = () => {
  const { pokemonDetails } = useContext(PokemonDetailsContext)

  return (
    <Typography
      color='primary'
    >
      {`${pokemonDetails?.weight / 10}kg`}
    </Typography>
  )
}

export default Weight