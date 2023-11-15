import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getPokemonList } from "../services/api-calls"
import { Link } from "react-router-dom"
import { pascalize, leadingZeros } from "../utilities/utilities"

const Region = () => {
  const location = useLocation()
  const {
    regionName,
    dexOffset,
    dexLimit,
    genPath,
    genNum,
  } = location.state
  const [region, setRegion] = useState([])

  useEffect(() => {
    const fetchPokemonList = async () => {
      const pokemonData = await getPokemonList(dexLimit, dexOffset)
      setRegion(pokemonData.results)
    }
    fetchPokemonList()
  }, [dexLimit, dexOffset])

  return (
    <>
      <h1
        style={{
          textAlign: 'center'
        }}
      >
        {regionName}
      </h1>
      {region.length ? (
        region.map((pokemon, idx) => (
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
                width: '175px',
              }}
            >
              <p
                style={{
                  margin: '8px'
                }}
              >
                {leadingZeros(dexOffset + idx + 1)}
              </p>
              <Link
                to={`/${genPath}/${pokemon.name}`}
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

export default Region