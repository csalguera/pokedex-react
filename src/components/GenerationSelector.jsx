import { Link } from "react-router-dom"

const GenerationSelector = (props) => {
  const {
    pokemonDetails,
    pokemonSpecies
  } = props

  const genNum = (parseInt(pokemonSpecies.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))

  console.log(genNum);

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
      ) : (
        <></>
      )}
      {genNum <= 2 ? (
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
      ) : (
        <></>
      )}
    </div>
  )
}

export default GenerationSelector