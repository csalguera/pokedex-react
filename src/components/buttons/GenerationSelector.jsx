// npm modules
import { Link } from "react-router-dom"
import { useContext } from "react"

// context
import { PokemonDetailsContext } from "../../pages/PokemonDetails"

const GenerationSelector = (props) => {
  const {
    pokemonDetails,
    genNum,
  } = useContext(PokemonDetailsContext)

  const {
    path,
    val,
  } = props

  let display = genNum <= val ? 'initial' : 'none'

  return (
    <Link
      to={`/${path}/${pokemonDetails.name}`}
      state={{ ...pokemonDetails, genNum }}
      style={{
        margin: '8px',
        textDecoration: 'none',
        display: display
      }}
    >
      <button>
        {`Gen ${val}`}
      </button>
    </Link>
  )
}

export default GenerationSelector