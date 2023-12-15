// npm modules
import { useContext } from "react"

// components
import EvolutionMethod from "../EvolutionMethod/EvolutionMethod"

// content
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const StageTwoAlt = (props) => {
  const {
    stageTwoAltDetails,
    stageTwoAltGen,
    stageTwoAltEvolutionMethod,
  } = props

  const {
    currentGen
  } = useContext(PokemonDetailsContext)

  return (
    <>
      {stageTwoAltDetails.name && stageTwoAltGen <= currentGen ? (
        <EvolutionMethod
          evolutionMethod={stageTwoAltEvolutionMethod}
        />
      ) : (
        <></>
      )}
    </>
  )
}

export default StageTwoAlt