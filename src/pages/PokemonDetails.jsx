import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getPokemonDetails } from "../services/api-calls"
import { pascalize } from "../utilities/pascalize"
import TypeContainer from "../components/TypeContainer"

const PokemonDetails = () => {
  const [pokemonDetails, setPokemonDetails] = useState({})
  const location = useLocation()
  const gen1 = (pokemonDetails.id <= 151)
  const gen2 = (pokemonDetails.id >= 152 && pokemonDetails.id <= 252)

  useEffect(() => {
    const fetchDetails = async () => {
      const pokemonData = await getPokemonDetails(location.state.url)
      setPokemonDetails(pokemonData)
    }
    fetchDetails()
  }, [location.state.url])

  console.log(pokemonDetails);

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
          {gen1 ? (
            <img src={pokemonDetails?.sprites?.versions['generation-i']['red-blue']?.front_transparent} alt="" />
          ) : gen2 ? (
            <img src={pokemonDetails?.sprites?.versions['generation-ii'].crystal?.front_transparent} alt="" />
          ) : (
            <img src="" alt="" />
          )}
          {pokemonDetails?.types?.map(type => (
            <TypeContainer
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