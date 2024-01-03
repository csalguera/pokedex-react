// npm modules
import { useContext, useEffect, useState, createContext } from "react"

// context
import { PokemonDetailsContext } from "./PokemonDetailsProvider"
export const PokemonMovesContext = createContext()

const MovesProvider = ({ children }) => {
  const {
    pokemonDetails,
  } = useContext(PokemonDetailsContext)

  const [movesAll, setMovesAll] = useState([])
  const [movesLevelUp, setMovesLevelUp] = useState({})
  const [movesRedBlue, setMovesRedBlue] = useState([])
  const [movesYellow, setMovesYellow] = useState([])

  useEffect(() => {
    if (pokemonDetails && pokemonDetails.moves) {
      setMovesAll(pokemonDetails.moves)
    }
  }, [pokemonDetails])

  useEffect(() => {
    const moveData = {}

    // red/blue level up
    moveData['red-blue'] = movesRedBlue
      .filter(move => move.version_group_details.move_learn_method.name === 'level-up')
      .sort((a, b) => a.version_group_details.level_learned_at - b.version_group_details.level_learned_at)

    // yellow level up
    moveData['yellow'] = movesYellow
      .filter(move => move.version_group_details.move_learn_method.name === 'level-up')
      .sort((a, b) => a.version_group_details.level_learned_at - b.version_group_details.level_learned_at)

    setMovesLevelUp(moveData)
  }, [
    movesRedBlue,
    movesYellow,
  ])

  useEffect(() => {
    const moveData = movesAll.flatMap(move =>
      move.version_group_details
        .filter(group => group.version_group.name === 'red-blue')
        .map(({ level_learned_at, move_learn_method, version_group }) => ({
          move: {
            name: move.move.name,
            url: move.move.url,
          },
          version_group_details: {
            level_learned_at,
            move_learn_method,
            version_group: {
              name: version_group.name,
            },
          },
        }))
    )
    setMovesRedBlue(moveData)
  }, [movesAll])

  useEffect(() => {
    const moveData = movesAll
    .flatMap(move =>
      move.version_group_details
        .filter(group => group.version_group.name === 'yellow')
        .map(({ level_learned_at, move_learn_method, version_group }) => ({
          move: {
            name: move.move.name,
            url: move.move.url,
          },
          version_group_details: {
            level_learned_at,
            move_learn_method,
            version_group: {
              name: version_group.name,
            },
          }
        }))
    )
    setMovesYellow(moveData)
  }, [movesAll])

  const contextValues = {
    movesAll,
    movesLevelUp,
    movesRedBlue,
    movesYellow,
  }

  return (
    <PokemonMovesContext.Provider
      value={contextValues}
    >
      {children}
    </PokemonMovesContext.Provider>
  )
}

export default MovesProvider