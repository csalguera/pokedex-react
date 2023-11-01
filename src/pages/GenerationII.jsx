import { useState, useEffect } from "react"
import { getPokemonList } from "../services/api-calls"
import { Link } from "react-router-dom"
import { leadingZeros, pascalize } from "../utilities/utilities"

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
        generationII.map((pokemon, idx) => (
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

export default GenerationII