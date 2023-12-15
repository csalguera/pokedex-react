import { useContext } from "react"

import LinkWrapper from "../common/LinkWrapper"
import PokemonSprite from "../common/PokemonSprite"

import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const StageTwoAltSprite = (props) => {
  const {
    stageTwoAltDetails,
    stageTwoAltGen,
  } = props

  const {
    genPath
  } = useContext(PokemonDetailsContext)

  return (
    <LinkWrapper
      to={`/${genPath}/${stageTwoAltDetails.name}`}
      state={{ ...stageTwoAltDetails, genNum: stageTwoAltGen, genPath }}
    >
      <PokemonSprite
        pokemonDetails={stageTwoAltDetails}
      />
    </LinkWrapper>
  )
}

export default StageTwoAltSprite