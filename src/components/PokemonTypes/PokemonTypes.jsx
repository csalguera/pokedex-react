// npm modules
import { useContext } from "react"

// components
import TypeBadge from "./TypeBadge"

// utilities
import { mapToName } from "../../utilities/utilities"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"
import { AlternateFormsContext } from "../../context/AlternateFormsProvider"

const PokemonTypes = (props) => {
  const { pokemonDetails } = props
  const { currentGen } = useContext(PokemonDetailsContext)
  const { form } = useContext(AlternateFormsContext)
  const pastTypes = (pokemonDetails?.past_types?.[0])

  let conditionRendered = false

  const conditionTypes = [
    {
      condition: currentGen > 1 && pastTypes?.generation?.name === 'generation-i',
      types: pokemonDetails?.types,
    },
    {
      condition: currentGen > 4 && mapToName(form).includes('rotom-'),
      types: pokemonDetails?.types,
    },
    {
      condition: currentGen <= 5 && pastTypes !== undefined,
      types: pastTypes?.types,
    },
    {
      condition: !pastTypes || currentGen >= 6,
      types: pokemonDetails?.types,
    },
  ]

  return (
    <>
      {conditionTypes.map(({ condition, types }) => {
        if (condition && types && !conditionRendered) {
          conditionRendered = true
          return types.map(type => (
            <TypeBadge
              key={type.slot}
              type={type.type}
            />
          ))
        }
      })}
    </>
  )
}

export default PokemonTypes