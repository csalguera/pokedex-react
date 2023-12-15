// npm modules
import { useContext } from "react"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

// utilities
import { leadingZeros, pascalize } from "../../utilities/utilities"
import HeaderWrapper from "../common/HeaderWrapper"

const Header = () => {
  const {
    pokemonDetails
  } = useContext(PokemonDetailsContext)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '300px',
      }}
    >
      <HeaderWrapper>
        {leadingZeros(pokemonDetails.id ?? '')} - {pascalize(pokemonDetails.name ?? '')}
      </HeaderWrapper>
    </div>
  )
}

export default Header