// npm modules
import { useContext } from "react"

// components
import EvolutionMethod from "../EvolutionMethod/EvolutionMethod"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const StageThreeAlt = (props) => {
  const {
    altDetails,
    altGen,
    altMethod,
  } = props

  const {
    currentGen
  } = useContext(PokemonDetailsContext)

  if (!altDetails.name || !(altGen <= currentGen)) return
  return (
    <EvolutionMethod
      evolutionMethod={altMethod}
    />
  )
}

export default StageThreeAlt