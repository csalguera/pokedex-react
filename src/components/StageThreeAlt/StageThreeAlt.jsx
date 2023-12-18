// npm modules
import { useContext } from "react"

// components
import EvolutionMethod from "../EvolutionMethod/EvolutionMethod"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const StageThreeAlt = (props) => {
  const {
    stageThreeAltDetails,
    stageThreeAltGen,
    stageThreeAltEvolutionMethod,
  } = props

  const {
    currentGen
  } = useContext(PokemonDetailsContext)

  return (
    <>
      {stageThreeAltDetails.name && stageThreeAltGen <= currentGen ? (
          <EvolutionMethod
            evolutionMethod={stageThreeAltEvolutionMethod}
          />
        ) : (
          <></>
        )}
    </>
  )
}

export default StageThreeAlt