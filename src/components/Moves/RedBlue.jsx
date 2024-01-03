// npm modules
import { useContext } from "react"

// mui components
import Typography from "@mui/material/Typography"

// context
import { PokemonMovesContext } from "../../context/MovesProvider"
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const RedBlue = () => {
  const {
    movesLevelUp,
  } = useContext(PokemonMovesContext)

  const {
    currentGen,
    sprites,
  } = useContext(PokemonDetailsContext)

  if (!movesLevelUp) return
  if (!(currentGen === 1 && sprites.spriteGen1 === 0)) return
  return (
    <>
      {movesLevelUp['red-blue']?.map(move => (
        <Typography
          key={move.move.name + move.version_group_details.level_learned_at}
        >
          {move.move.name}
        </Typography>
      ))}
    </>
  )
}

export default RedBlue