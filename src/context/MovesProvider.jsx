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
  const [movesRedBlue, setMovesRedBlue] = useState([])

  useEffect(() => {
    if (pokemonDetails && pokemonDetails.moves) {
      setMovesAll(pokemonDetails.moves)
    }
  }, [pokemonDetails])

  useEffect(() => {
    const moveData = movesAll
    .flatMap(move =>
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

  const contextValues = {
    movesAll,
    movesRedBlue,
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