// npm modules
import { useContext } from "react"

// components
import EvolutionMethod from "../EvolutionMethod/EvolutionMethod"
import PokemonSprite from "../common/PokemonSprite"
import LinkWrapper from "../common/LinkWrapper"
import StageThreeAlt from "../StageThreeAlt/StageThreeAlt"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"
import { EvolutionChainContext } from "../../context/EvolutionChainProvider"
import FlexCenterWrapper from "../common/FlexCenterWrapper"

const StageThreeChain = () => {
  const {
    genPath,
    currentGen,
  } = useContext(PokemonDetailsContext)

  const {
    stageThree,
    stageThreeGen,
    stageThreeDetails,
    stageThreeEvolutionMethod,
    stageThreeAltGen,
    stageThreeAltDetails,
    stageThreeAltEvolutionMethod,
    stageThreeAltStageTwoGen,
    stageThreeAltStageTwoDetails,
    stageThreeAltStageTwoEvolutionMethod,
  } = useContext(EvolutionChainContext)

  return (
    <>
      {stageThree && stageThreeGen <= currentGen ? (
        <>
          <FlexCenterWrapper
            additionalStyles={{
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            <EvolutionMethod
              evolutionMethod={stageThreeEvolutionMethod}
            />
            <StageThreeAlt
              stageThreeAltDetails={stageThreeAltDetails}
              stageThreeAltGen={stageThreeAltGen}
              stageThreeAltEvolutionMethod={stageThreeAltEvolutionMethod}
            />
            <StageThreeAlt
              stageThreeAltDetails={stageThreeAltStageTwoDetails}
              stageThreeAltGen={stageThreeAltStageTwoGen}
              stageThreeEvolutionMethod={stageThreeAltStageTwoEvolutionMethod}
            />
          </FlexCenterWrapper>
          <FlexCenterWrapper
            additionalStyles={{
              flexDirection: 'column',
            }}
          >
            <LinkWrapper
              to={`/${genPath}/${stageThreeDetails.name}`}
              state={{ ...stageThreeDetails, genNum: stageThreeGen, genPath }}
            >
              <PokemonSprite
                pokemonDetails={stageThreeDetails}
              />
            </LinkWrapper>
            <LinkWrapper
              to={`/${genPath}/${stageThreeAltDetails.name}`}
              state={{ ...stageThreeAltDetails, genNum: stageThreeAltGen, genPath }}
            >
              <PokemonSprite
                pokemonDetails={stageThreeAltDetails}
              />
            </LinkWrapper>
            <LinkWrapper
              to={`/${genPath}/${stageThreeAltStageTwoDetails.name}`}
              state={{ ...stageThreeAltStageTwoDetails, genNum: stageThreeAltStageTwoGen, genPath }}
            >
              <PokemonSprite
                pokemonDetails={stageThreeAltStageTwoDetails}
              />
            </LinkWrapper>
          </FlexCenterWrapper>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default StageThreeChain