import { useState, useEffect } from "react"
import { getPokemonList } from "../services/api-calls"
import { Link } from "react-router-dom"

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    const fetchPokemonList = async () => {
      const pokemonData = await getPokemonList(151)
      setPokemonList(pokemonData.results)
    }
    fetchPokemonList()
  }, [])

  function pascalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <>
      <h1>Pokemon List</h1>
      {pokemonList.length ? (
        pokemonList.map(pokemon => (
          <Link
            key={pokemon.name}
            to={`/pokemon/${pokemon.name}`}
            style={{
              display: 'flex',
              width: 'fit-content',
            }}
          >
            {pascalize(pokemon.name)}
          </Link>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  )
}

export default PokemonList