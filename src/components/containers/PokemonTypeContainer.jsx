// components
import PokemonType from "../PokemonType"

const PokemonTypeContainer = (props) => {
  const {
    currentGen,
    pastTypes,
    pokemonDetails,
  } = props
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