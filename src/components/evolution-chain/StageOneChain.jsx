// npm modules
import { Link } from "react-router-dom"

// components
import PokemonSprite from "../PokemonSprite"

// context
import { PokemonDetailsContext } from "../../pages/PokemonDetails"
import { PokemonEvolutionChainContext } from "./PokemonEvolutionChain"
import { useContext } from "react"

const StageOneChain = () => {
  const {
    spriteGen1,
    spriteGen2,
    spriteGen3,
    spriteGen4,
    genPath,
    currentGen,
  } = useContext(PokemonDetailsContext)

  const {
    stageOne,
    stageOneDetails,
    stageOneGen,
  } = useContext(PokemonEvolutionChainContext)


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
              spriteGen1={spriteGen1}
              spriteGen2={spriteGen2}
              spriteGen3={spriteGen3}
              spriteGen4={spriteGen4}
              genPath={genPath}
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