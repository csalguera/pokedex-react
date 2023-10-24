import { useState, useEffect } from "react"
import { getPokemonList } from "../services/api-calls"
import { Link } from "react-router-dom"

const GenerationI = () => {
  const [generationI, setGenerationI] = useState([])

  useEffect(() => {
    const fetchPokemonData = async () => {
      const pokemonData = await getPokemonList(151, 0)
      setGenerationI(pokemonData.results)
    }
    fetchPokemonData()
  }, [])

  function pascalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <>
      <h1>Generation I</h1>
      {generationI.length ? (
        generationI.map(pokemon => (
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

export default GenerationI