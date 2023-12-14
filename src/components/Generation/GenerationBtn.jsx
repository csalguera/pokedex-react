// npm modules
import { Link } from "react-router-dom"
import { useContext } from "react"
import { Button } from "@mui/material"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const GenerationBtn = (props) => {
  const {
    pokemonDetails,
    genNum,
    currentGen,
  } = useContext(PokemonDetailsContext)

  const {
    path,
    generationVal,
  } = props

  let display = genNum <= generationVal

  return (
    <Link
      to={display ? `/${path}/${pokemonDetails.name}` : '#'}
      state={{ ...pokemonDetails, genNum }}
      style={{
        margin: '8px',
      }}
    >
      <Button
        variant={currentGen === generationVal ? 'contained' : 'outlined'}
        disabled={display ? false : true}
      >
        {`Gen ${generationVal}`}
      </Button>
    </Link>
  )
}

export default GenerationBtn