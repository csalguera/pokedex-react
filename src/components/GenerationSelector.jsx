import { Link } from "react-router-dom"

const GenerationSelector = (props) => {
  const {
    pokemonDetails,
    genNum,
  } = props

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {genNum <= 1 ? (
        <Link
          to={`/gen-i/${pokemonDetails.name}`}
          state={{ ...pokemonDetails, genNum }}
          style={{
            margin: '8px',
            textDecoration: 'none'
          }}
          >
            <button>
              Gen 1
            </button>
          </Link>
      ) : (
        <></>
      )}
      {genNum <= 2 ? (
        <Link
          to={`/gen-ii/${pokemonDetails.name}`}
          state={{ ...pokemonDetails, genNum }}
          style={{
            margin: '8px',
            textDecoration: 'none'
          }}
        >
          <button>
            Gen 2
          </button>
        </Link>
      ) : (
        <></>
      )}
      {genNum <= 3 ? (
        <Link
          to={`/gen-iii/${pokemonDetails.name}`}
          state={{ ...pokemonDetails, genNum }}
          style={{
            margin: '8px',
            textDecoration: 'none'
          }}
        >
          <button>
            Gen 3
          </button>
        </Link>
      ) : (
        <></>
      )}
      {genNum <= 4 ? (
        <Link
          to={`/gen-iv/${pokemonDetails.name}`}
          state={{ ...pokemonDetails, genNum }}
          style={{
            margin: '8px',
            textDecoration: 'none'
          }}
        >
          <button>
            Gen 4
          </button>
        </Link>
      ) : (
        <></>
      )}
    </div>
  )
}

export default GenerationSelector