import { useState, useEffect } from "react"
import { getPokemonList } from "../services/api-calls"
import { Link } from "react-router-dom"
import { leadingZeros, pascalize } from "../utilities/utilities"

const Johto = () => {
  const [johto, setJohto] = useState([])

  useEffect(() => {
    const fetchPokemonList = async () => {
      const pokemonData = await getPokemonList(100, 151)
      setJohto(pokemonData.results)
    }
    fetchPokemonList()
  }, [])

  return (
    <>
      <h1
        style={{
          textAlign: 'center'
        }}
      >
        Johto
      </h1>
      {johto.length ? (
        johto.map((pokemon, idx) => (
          <div
            key={pokemon.name}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '175px'
              }}
            >
              <p
                style={{
                  margin: '8px'
                }}
              >
                {leadingZeros(idx + 152)}
              </p>
              <Link
                to={`/gen-ii/${pokemon.name}`}
                state={pokemon}
                style={{
                  display: 'flex',
                  width: 'fit-content',
                }}
              >
                {pascalize(pokemon.name)}
              </Link>
            </div>
          </div>
        ))
      ) : (
        <h2
          style={{
            textAlign: 'center'
          }}
        >
          Loading...
        </h2>
      )}
    </>
  )
}

export default Johto