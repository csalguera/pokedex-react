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

  if(!altDetails.name || !(altGen <= currentGen)) return
  return (
    <EvolutionMethod
      evolutionMethod={altMethod}
    />
  )
}

export default StageTwoAlt