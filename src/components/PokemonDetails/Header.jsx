// npm modules
import { useContext } from "react"

// components
import FlexCenterWrapper from "../common/FlexCenterWrapper"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

// utilities
import { pascalize, mapToSpecies } from "../../utilities/utilities"
import HeaderWrapper from "../common/HeaderWrapper"

const Header = () => {
  const {
    pokemonDetails
  } = useContext(PokemonDetailsContext)

  return (
    <FlexCenterWrapper>
      <HeaderWrapper>
        {pascalize(mapToSpecies(pokemonDetails.name) ?? '')}
      </HeaderWrapper>
    </FlexCenterWrapper>
  )
}

export default Header