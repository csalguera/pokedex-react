// npm modules
import { useContext } from "react"

// components
import PokemonSprite from "../common/PokemonSprite"
import LinkWrapper from "../common/LinkWrapper"
import FlexCenterWrapper from "../common/FlexCenterWrapper"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"
import { EvolutionChainContext } from "../../context/EvolutionChainProvider"

const StageOneChain = () => {
  const {
    genPath,
    currentGen,
  } = useContext(PokemonDetailsContext)

  const {
    stageOne,
    stageOneDetails,
    stageOneGen,
  } = useContext(EvolutionChainContext)

  if (!stageOne || !(stageOneGen <= currentGen)) return
  return (
    <FlexCenterWrapper>
      <LinkWrapper
        to={`/${genPath}/${stageOneDetails.name}`}
        state={{ ...stageOneDetails, genNum: stageOneGen, genPath }}
      >
        <PokemonSprite
          pokemonDetails={stageOneDetails}
        />
      </LinkWrapper>
    </FlexCenterWrapper>
  )
}

export default StageOneChain