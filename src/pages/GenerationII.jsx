import { useState, useEffect } from "react"
import { getPokemonList } from "../services/api-calls"
import { Link } from "react-router-dom"
import { pascalize } from "../utilities/pascalize"

const GenerationII = () => {
  const [generationII, setGenerationII] = useState([])

  useEffect(() => {
    const fetchPokemonList = async () => {
      const pokemonData = await getPokemonList(100, 151)
      setGenerationII(pokemonData.results)
    }
    fetchPokemonList()
  }, [])

  return (
    <>
      <h1>Generation II</h1>
      {generationII.length ? (
        generationII.map(pokemon => (
          <Link
            key={pokemon.name}
            to={`/gen-ii/${pokemon.name}`}
            state={pokemon}
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

export default GenerationII