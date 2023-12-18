// npm modules
import { useContext } from "react"

// components
import EvolutionMethod from "../EvolutionMethod/EvolutionMethod"

// content
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const StageTwoAlt = (props) => {
  const {
    altDetails,
    altGen,
    altMethod,
  } = props

  const {
    currentGen
  } = useContext(PokemonDetailsContext)

  return (
    <>
      {altDetails.name && altGen <= currentGen ? (
        <EvolutionMethod
          evolutionMethod={altMethod}
        />
      ) : (
        <></>
      )}
    </>
  )
}

export default StageTwoAlt