// npm modules
import { useContext } from "react"

// components
import PokemonSprite from "../common/PokemonSprite"
import LinkWrapper from "../common/LinkWrapper"

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


  return (
    <>
      {stageOne && stageOneGen <= currentGen ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <LinkWrapper
            to={`/${genPath}/${stageOneDetails.name}`}
            state={{ ...stageOneDetails, genNum: stageOneGen, genPath }}
          >
            <PokemonSprite
              pokemonDetails={stageOneDetails}
            />
          </LinkWrapper>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default StageOneChain