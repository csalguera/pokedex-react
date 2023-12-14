// npm modules
import { useContext } from "react"
import { Link } from "react-router-dom"

// components
import PokemonSprite from "../common/PokemonSprite"

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
          <Link
            to={`/${genPath}/${stageOneDetails.name}`}
            state={{ ...stageOneDetails, genNum: stageOneGen, genPath }}
          >
            <PokemonSprite
              pokemonDetails={stageOneDetails}
            />
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default StageOneChain