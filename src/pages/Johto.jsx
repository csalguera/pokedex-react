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
      <h1>Johto</h1>
      {johto.length ? (
        johto.map((pokemon, idx) => (
          <div
            key={pokemon.name}
            style={{
              display: 'flex',
              alignItems: 'center',
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
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  )
}

export default Johto