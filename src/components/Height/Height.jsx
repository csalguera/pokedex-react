// npm modules
import { useContext } from "react"

// mui components
import Typography from "@mui/material/Typography"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const Height = () => {
  const { pokemonDetails } = useContext(PokemonDetailsContext)

  return (
    <Typography
      color='primary'
    >
      {`${pokemonDetails?.height / 10}m`}
    </Typography>
  )
}

export default Height