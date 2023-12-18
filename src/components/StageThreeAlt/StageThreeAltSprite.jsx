// npm modules
import { useContext } from "react"

// components
import LinkWrapper from "../common/LinkWrapper"
import PokemonSprite from "../common/PokemonSprite"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const StageThreeAltSprite = (props) => {
  const {
    altDetails,
    altGen,
  } = props

  const {
    genPath,
  } = useContext(PokemonDetailsContext)

  return (
    <LinkWrapper
      to={`/${genPath}/${altDetails.name}`}
      state={{ ...altDetails, genNum: altGen, genPath }}
    >
      <PokemonSprite
        pokemonDetails={altDetails}
      />
    </LinkWrapper>
  )
}

export default StageThreeAltSprite