import { useState, useEffect } from "react"
import { getPokemonList } from "../services/api-calls"
import { Link } from "react-router-dom"
import { pascalize, leadingZeros } from "../utilities/utilities"

const Kanto = () => {
  const [kanto, setKanto] = useState([])

  useEffect(() => {
    const fetchPokemonList = async () => {
      const pokemonData = await getPokemonList(151, 0)
      setKanto(pokemonData.results)
    }
    fetchPokemonList()
  }, [])

  return (
    <>
      <h1>Kanto</h1>
      {kanto.length ? (
        kanto.map((pokemon, idx) => (
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
              {leadingZeros(idx + 1)}
            </p>
            <Link
              to={`/gen-i/${pokemon.name}`}
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

export default Kanto