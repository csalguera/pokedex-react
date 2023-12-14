// npm modules
import { Link } from "react-router-dom"
import { useContext } from "react"

// components
import EvolutionMethod from "./EvolutionMethod"
import PokemonSprite from "../PokemonSprite"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"
import { PokemonEvolutionChainContext } from "./PokemonEvolutionChain"

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
  } = useContext(PokemonEvolutionChainContext)

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
              />
            </Link>
            <Link
              to={`/${genPath}/${stageThreeAltDetails.name}`}
              state={{ ...stageThreeAltDetails, genNum: stageThreeAltGen, genPath }}
            >
              <PokemonSprite
                pokemonDetails={stageThreeAltDetails}
              />
            </Link>
            <Link
              to={`/${genPath}/${stageThreeAltStageTwoDetails.name}`}
              state={{ ...stageThreeAltStageTwoDetails, genNum: stageThreeAltStageTwoGen, genPath }}
            >
              <PokemonSprite
                pokemonDetails={stageThreeAltStageTwoDetails}
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