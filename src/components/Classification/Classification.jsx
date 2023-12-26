// npm modules
import { useContext } from "react"

// components
import HeaderWrapper from "../common/HeaderWrapper"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const Classification = () => {
  const { pokemonSpecies } = useContext(PokemonDetailsContext)

  return (
    <HeaderWrapper
      otherVariant='h5'
    >
      {pokemonSpecies?.genera?.[7]?.genus ?? ''}
    </HeaderWrapper>
  )
}

export default Classification