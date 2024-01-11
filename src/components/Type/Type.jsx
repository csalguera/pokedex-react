// npm modules
import { useContext } from "react"

// components
import TypeBadge from "./TypeBadge"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

// utilities
import { mapToSpecies } from "../../utilities/utilities"

const Type = (props) => {
  const { pokemonDetails } = props
  const { currentGen } = useContext(PokemonDetailsContext)
  const pastTypes = (pokemonDetails?.past_types?.[0])

  return (
      <>
        {currentGen > 1 && pastTypes?.generation.name === 'generation-i' ? (
          pokemonDetails?.types?.map(type => (
            <TypeBadge
              key={type.slot}
              type={type.type}
            />
          ))
        ) : (currentGen < 5 && mapToSpecies(pokemonDetails.name) === 'rotom') ?? (currentGen <= 5 && pastTypes) ? (
          pastTypes?.types?.map(type => (
            <TypeBadge
              key={type.slot}
              type={type.type}
            />
          ))
        ) : (
          pokemonDetails?.types?.map(type => (
            <TypeBadge
              key={type.slot}
              type={type.type}
            />
          ))
        )}
      </>
    
  )
}

export default Type