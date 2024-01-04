// npm modules
import React, { useContext } from "react"

// components
import Move from './Move'

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
      {movesLevelUp['red-blue']?.map(moveEl => (
        <Move
          key={moveEl.move.name + moveEl.version_group_details.level_learned_at}
          moveEl={moveEl}
        />
      ))}
    </>
  )
}

export default RedBlue