import { Link } from "react-router-dom"

const GenerationSelector = (props) => {
  const {
    pokemonDetails
  } = props

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Link
        to={`/gen-i/${pokemonDetails.name}`}
        state={pokemonDetails}
        style={{
          margin: '8px',
          textDecoration: 'none'
        }}
        >
          <button>
            Gen 1
          </button>
        </Link>
        <Link
          to={`/gen-ii/${pokemonDetails.name}`}
          state={pokemonDetails}
          style={{
            margin: '8px',
            textDecoration: 'none'
          }}
        >
          <button>
            Gen 2
          </button>
        </Link>
    </div>
  )
}

export default GenerationSelector