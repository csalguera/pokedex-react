// npm modules
import { useContext } from "react"

// utilities
import { pascalize, determineCategory } from "../../utilities/utilities"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const DamageClass = (props) => {
  const {
    power,
    type,
    category,
  } = props

  const {
    currentGen,
  } = useContext(PokemonDetailsContext)

  return (
    <>
      {currentGen <= 3 && power ? (
        pascalize(determineCategory(type?.name ?? ''))
      ) : (
        pascalize(category ?? '')
      )}
    </>
  )
}

export default DamageClass