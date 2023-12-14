// npm modules
import { useContext } from "react"

// components
import TypeBadge from "./TypeBadge"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const Type = () => {
  const {
    currentGen,
    pastTypes,
    pokemonDetails,
  } = useContext(PokemonDetailsContext)

  return (
    <>
      {currentGen > 1 && pastTypes?.generation.name === 'generation-i' ? (
        pokemonDetails?.types?.map(type => (
          <TypeBadge
            type={type}
            key={type.slot}
          />
        ))
      ) : currentGen <= 5 && pastTypes ? (
        pastTypes?.types?.map(type => (
          <TypeBadge
            type={type}
            key={type.slot}
          />
        ))
      ) : (
        pokemonDetails?.types?.map(type => (
          <TypeBadge
            type={type}
            key={type.slot}
          />
        ))
      )}
    </>
  )
}

export default Type