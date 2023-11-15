// npm modules
import { Link } from "react-router-dom"

// components
import PokemonSprite from "../PokemonSprite"

const StageOneChain = (props) => {
  const {
    stageOne,
    stageOneDetails,
    stageOneGen,
    genPath,
    currentGen,
    spriteVersion
  } = props

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
              spriteVersion={spriteVersion}
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