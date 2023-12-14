// npm modules
import { useContext } from "react"

// components
import PokemonType from "../PokemonType"

// context
import { PokemonDetailsContext } from "../../pages/PokemonDetails"

const PokemonTypeContainer = () => {
  const {
    currentGen,
    pastTypes,
    pokemonDetails,
  } = useContext(PokemonDetailsContext)

  return (
    <>
      {currentGen > 1 && pastTypes?.generation.name === 'generation-i' ? (
        pokemonDetails?.types?.map(type => (
          <PokemonType
            type={type}
            key={type.slot}
          />
        ))
      ) : currentGen <= 5 && pastTypes ? (
        pastTypes?.types?.map(type => (
          <PokemonType
            type={type}
            key={type.slot}
          />
        ))
      ) : (
        pokemonDetails?.types?.map(type => (
          <PokemonType
            type={type}
            key={type.slot}
          />
        ))
      )}
    </>
  )
}

export default PokemonTypeContainer