// npm modules
import { useContext } from "react"

// components
import FlexCenterWrapper from "../common/FlexCenterWrapper"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

// utilities
import { pascalize, validateSpecies } from "../../utilities/utilities"
import HeaderWrapper from "../common/HeaderWrapper"

const Header = () => {
  const {
    pokemonDetails
  } = useContext(PokemonDetailsContext)

  return (
    <FlexCenterWrapper>
      <HeaderWrapper>
        {pascalize(validateSpecies(pokemonDetails.name) ?? '')}
      </HeaderWrapper>
    </FlexCenterWrapper>
  )
}

export default Header