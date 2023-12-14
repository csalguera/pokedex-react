// npm modules
import { useContext } from "react"

// context
import { PokemonDetailsContext } from "../pages/PokemonDetails"

// utilities
import { leadingZeros, pascalize } from "../utilities/utilities"

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
      <h1
        style={{
          margin: '8px',
        }}
      >
        {leadingZeros(pokemonDetails.id ?? '')}
      </h1>
      <h1
        style={{
          margin: '8px',
        }}
      >
        {pascalize(pokemonDetails.name ?? '')}
      </h1>
    </div>
  )
}

export default Header