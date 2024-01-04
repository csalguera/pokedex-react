// npm modules
import { useContext } from "react"

// components
import Move from './Move'

// context
import { PokemonMovesContext } from "../../context/MovesProvider"
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const MoveLevelUp = (props) => {
  const {
    versionGroup,
    versionNum,
    versionGen,
    spriteGen,
  } = props

  const {
    movesLevelUp,
  } = useContext(PokemonMovesContext)

  const {
    currentGen,
    sprites,
  } = useContext(PokemonDetailsContext)

  if (!movesLevelUp) return
  if (!(currentGen === versionGen && sprites[spriteGen] === versionNum)) return
  return (
    <>
    {movesLevelUp[versionGroup]?.map(moveEl => (
      <Move
        key={moveEl.move.name + moveEl.version_group_details.level_learned_at}
        moveEl={moveEl}
      />
    ))}
    </>
  )
}

export default MoveLevelUp