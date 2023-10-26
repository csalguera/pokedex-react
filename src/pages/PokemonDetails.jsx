// npm modules
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

// components
import PokemonType from "../components/PokemonType"
import PokemonSprite from "../components/PokemonSprite"

// services
import { getPokemonDetails } from "../services/api-calls"

// utilities
import { pascalize } from "../utilities/pascalize"

const PokemonDetails = () => {
  const [pokemonDetails, setPokemonDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const pokemonData = await getPokemonDetails(location.state.url)
      setPokemonDetails(pokemonData)
    }
    fetchDetails()
  }, [location.state.url])

  return (
    <>
      {pokemonDetails ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h1>{pascalize(pokemonDetails.name ?? '')}</h1>
          <PokemonSprite
            pokemonDetails={pokemonDetails}
            path={location.pathname}
          />
          {pokemonDetails?.types?.map(type => (
            <PokemonType
              type={type}
              key={type.slot}
            />
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}

export default PokemonDetails