// npm modules
import { useContext } from "react"

// context
import { PokemonMovesContext } from "../../context/MovesProvider"

const Moves = () => {
  const {
    movesAll,
    movesRedBlue,
  } = useContext(PokemonMovesContext)

  return (
    <>
    </>
  )
}

export default Moves