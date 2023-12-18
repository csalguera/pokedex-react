// npm modules
import { useContext } from "react"

// components
import EvolutionMethod from "../EvolutionMethod/EvolutionMethod"
import PokemonSprite from "../common/PokemonSprite"
import LinkWrapper from "../common/LinkWrapper"
import StageThreeAlt from "../StageThreeAlt/StageThreeAlt"
import StageThreeAltSprite from "../StageThreeAlt/StageThreeAltSprite"

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

  const alt1 = {
    gen: stageThreeAltGen,
    details: stageThreeAltDetails,
    method: stageThreeAltEvolutionMethod,
  }

  const alt2 = {
    gen: stageThreeAltStageTwoGen,
    details: stageThreeAltStageTwoDetails,
    method: stageThreeAltStageTwoEvolutionMethod,
  }

  const alts =[
    alt1,
    alt2,
  ]

  const validAlts = alts.filter(alt => alt.details.name)

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
            {validAlts.map(alt => (
              <StageThreeAlt
                altDetails={alt.details}
                altGen={alt.gen}
                altMethod={alt.method}
              />
            ))}
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
            <StageThreeAltSprite
              altDetails={stageThreeAltDetails}
              altGen={stageThreeAltGen}
            />
            <StageThreeAltSprite
              altDetails={stageThreeAltStageTwoDetails}
              altGen={stageThreeAltStageTwoGen}
            />
          </FlexCenterWrapper>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default StageThreeChain