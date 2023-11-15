// npm modules
import { Link } from "react-router-dom"

const GenerationSelector = (props) => {
  const {
    pokemonDetails,
    genNum,
    path,
    val,
  } = props

  return (
    <>
      {genNum <= val ? (
        <Link
          to={`/${path}/${pokemonDetails.name}`}
          state={{ ...pokemonDetails, genNum }}
          style={{
            margin: '8px',
            textDecoration: 'none'
          }}
          >
            <button>
              {`Gen ${val}`}
            </button>
          </Link>
      ) : (
        <></>
      )}
    </>
  )
}

export default GenerationSelector