// npm modules
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

// components
import HeaderWrapper from "../components/common/HeaderWrapper"

// services
import { getPokemonList } from "../services/api-calls"

// utilities
import { pascalize, leadingZeros } from "../utilities/utilities"

const Region = () => {
  const [region, setRegion] = useState([])
  const location = useLocation()
  const {
    regionName,
    dexOffset,
    dexLimit,
    genPath,
    genNum,
  } = location.state

  useEffect(() => {
    const fetchPokemonList = async () => {
      const pokemonData = await getPokemonList(dexLimit, dexOffset)
      setRegion(pokemonData.results)
    }
    fetchPokemonList()
  }, [dexLimit, dexOffset])

  return (
    <>
      <HeaderWrapper>
        {regionName}
      </HeaderWrapper>
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
                state={{ ...pokemon, genNum, genPath }}
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