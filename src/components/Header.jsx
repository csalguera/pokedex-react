// utilities
import { leadingZeros, pascalize } from "../utilities/utilities"

const Header = ({ pokemonDetails }) => {
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