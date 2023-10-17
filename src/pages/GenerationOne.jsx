import { useState, useEffect } from "react"
import { getPokemonList } from "../services/api-calls"
import { Link } from "react-router-dom"

const GenerationOne = () => {
  const [generationOne, setGenerationOne] = useState([])

  useEffect(() => {
    const fetchPokemonData = async () => {
      const pokemonData = await getPokemonList(151)
      setGenerationOne(pokemonData.results)
    }
    fetchPokemonData()
  }, [])

  function pascalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <>
      <h1>Generation One</h1>
      {generationOne.length ? (
        generationOne.map(pokemon => (
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

export default GenerationOne