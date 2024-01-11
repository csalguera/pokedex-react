// npm modules
import { useContext } from "react"

// components
import TypeBadge from "./TypeBadge"

// utilities
import { mapToName } from "../../utilities/utilities"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"
import { AlternateFormsContext } from "../../context/AlternateFormsProvider"

const Type = (props) => {
  const { pokemonDetails } = props
  const { currentGen } = useContext(PokemonDetailsContext)
  const { form } = useContext(AlternateFormsContext)
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
        ) : (currentGen === 4 && mapToName(form).includes('rotom-')) ?? (currentGen <= 5 && pastTypes) ? (
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