// npm modules
import { Link } from "react-router-dom"

// components
import EvolutionMethod from "./EvolutionMethod"
import PokemonSprite from "../PokemonSprite"

const StageThreeChain = (props) => {
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
    genPath,
    currentGen,
    spriteGen1,
    spriteGen2,
    spriteGen3,
    spriteGen4,
  } = props

  return (
    <>
      {stageThree && stageThreeGen <= currentGen ? (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}
          >
            <EvolutionMethod
              evolutionMethod={stageThreeEvolutionMethod}
            />
            {stageThreeAltDetails.name && stageThreeAltGen <= currentGen ? (
              <EvolutionMethod
                evolutionMethod={stageThreeAltEvolutionMethod}
              />
            ) : (
              <></>
            )}
            {stageThreeAltStageTwoDetails.name && stageThreeAltStageTwoGen <= currentGen ? (
              <EvolutionMethod
                evolutionMethod={stageThreeAltStageTwoEvolutionMethod}
              />
            ) : (
              <></>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Link
              to={`/${genPath}/${stageThreeDetails.name}`}
              state={{ ...stageThreeDetails, genNum: stageThreeGen, genPath }}
            >
              <PokemonSprite
                pokemonDetails={stageThreeDetails}
                spriteGen1={spriteGen1}
                spriteGen2={spriteGen2}
                spriteGen3={spriteGen3}
                spriteGen4={spriteGen4}
                genPath={genPath}
              />
            </Link>
            <Link
              to={`/${genPath}/${stageThreeAltDetails.name}`}
              state={{ ...stageThreeAltDetails, genNum: stageThreeAltGen, genPath }}
            >
              <PokemonSprite
                pokemonDetails={stageThreeAltDetails}
                spriteGen1={spriteGen1}
                spriteGen2={spriteGen2}
                spriteGen3={spriteGen3}
                spriteGen4={spriteGen4}
                genPath={genPath}
              />
            </Link>
            <Link
              to={`/${genPath}/${stageThreeAltStageTwoDetails.name}`}
              state={{ ...stageThreeAltStageTwoDetails, genNum: stageThreeAltStageTwoGen, genPath }}
            >
              <PokemonSprite
                pokemonDetails={stageThreeAltStageTwoDetails}
                spriteGen1={spriteGen1}
                spriteGen2={spriteGen2}
                spriteGen3={spriteGen3}
                spriteGen4={spriteGen4}
                genPath={genPath}
              />
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default StageThreeChain