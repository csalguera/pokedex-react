import { useContext } from "react"

import LinkWrapper from "../common/LinkWrapper"
import PokemonSprite from "../common/PokemonSprite"

import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const StageTwoAltSprite = (props) => {
  const {
    altDetails,
    altGen,
  } = props

  const {
    genPath
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

export default StageTwoAltSprite