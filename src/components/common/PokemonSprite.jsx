// npm modules
import { useContext } from "react"

// components
import FlexCenterWrapper from "./FlexCenterWrapper"
import ImageWrapper from "./ImageWrapper"

import { determineSprite } from "../../utilities/data"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const PokemonSprite = (props) => {
  const {
    sprites,
    genPath,
  } = useContext(PokemonDetailsContext)

  const {
    pokemonDetails
  } = props

  return (
    <FlexCenterWrapper
      additionalStyles={{
        borderRadius: '10px',
        backgroundColor: 'background.border',
        p: 2,
        m: 2,
        width: '96px',
        height: '96px',
      }}
    >
      <ImageWrapper
        src={determineSprite(pokemonDetails, genPath, sprites)}
      />
    </FlexCenterWrapper>
  )
}

export default PokemonSprite