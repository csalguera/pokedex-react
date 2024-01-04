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
  const [movesGoldSilver, setMovesGoldSilver] = useState([])
  const [movesCrystal, setMovesCrystal] = useState([])
  const [movesRubySapphire, setMovesRubySapphire] = useState([])
  const [movesFireRedLeafGreen, setMovesFireRedLeafGreen] = useState([])
  const [movesEmerald, setMovesEmerald] = useState([])
  const [movesDiamondPearl, setMovesDiamondPearl] = useState([])
  const [movesHeartGoldSoulSilver, setMovesHeartGoldSoulSilver] = useState([])
  const [movesPlatinum, setMovesPlatinum] = useState([])

  useEffect(() => {
    if (pokemonDetails && pokemonDetails.moves) {
      setMovesAll(pokemonDetails.moves)
    }
  }, [pokemonDetails])

  useEffect(() => {
    const moveData = {}

    // red-blue level up
    moveData['red-blue'] = movesRedBlue
      .filter(move => move.version_group_details.move_learn_method.name === 'level-up')
      .sort((a, b) => a.version_group_details.level_learned_at - b.version_group_details.level_learned_at)

    // yellow level up
    moveData['yellow'] = movesYellow
      .filter(move => move.version_group_details.move_learn_method.name === 'level-up')
      .sort((a, b) => a.version_group_details.level_learned_at - b.version_group_details.level_learned_at)

      // gold-silver level up
    moveData['gold-silver'] = movesGoldSilver
      .filter(move => move.version_group_details.move_learn_method.name === 'level-up')
      .sort((a, b) => a.version_group_details.level_learned_at - b.version_group_details.level_learned_at)

      // crystal level up
    moveData['crystal'] = movesCrystal
      .filter(move => move.version_group_details.move_learn_method.name === 'level-up')
      .sort((a, b) => a.version_group_details.level_learned_at - b.version_group_details.level_learned_at)

      // ruby-sapphire level up
    moveData['ruby-sapphire'] = movesRubySapphire
      .filter(move => move.version_group_details.move_learn_method.name === 'level-up')
      .sort((a, b) => a.version_group_details.level_learned_at - b.version_group_details.level_learned_at)

      // firered-leafgreen level up
    moveData['firered-leafgreen'] = movesFireRedLeafGreen
      .filter(move => move.version_group_details.move_learn_method.name === 'level-up')
      .sort((a, b) => a.version_group_details.level_learned_at - b.version_group_details.level_learned_at)

      // emerald level up
    moveData['emerald'] = movesEmerald
    .filter(move => move.version_group_details.move_learn_method.name === 'level-up')
    .sort((a, b) => a.version_group_details.level_learned_at - b.version_group_details.level_learned_at)

      // diamond-pearl level up
    moveData['diamond-pearl'] = movesDiamondPearl
      .filter(move => move.version_group_details.move_learn_method.name === 'level-up')
      .sort((a, b) => a.version_group_details.level_learned_at - b.version_group_details.level_learned_at)

      // heartgold-soulsilver level up
    moveData['heartgold-soulsilver'] = movesHeartGoldSoulSilver
      .filter(move => move.version_group_details.move_learn_method.name === 'level-up')
      .sort((a, b) => a.version_group_details.level_learned_at - b.version_group_details.level_learned_at)

      // platinum level up
    moveData['platinum'] = movesPlatinum
      .filter(move => move.version_group_details.move_learn_method.name === 'level-up')
      .sort((a, b) => a.version_group_details.level_learned_at - b.version_group_details.level_learned_at)

    setMovesLevelUp(moveData)
  }, [
    movesRedBlue,
    movesYellow,
    movesGoldSilver,
    movesCrystal,
    movesRubySapphire,
    movesFireRedLeafGreen,
    movesEmerald,
    movesDiamondPearl,
    movesHeartGoldSoulSilver,
    movesPlatinum,
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

  useEffect(() => {
    const moveData = movesAll
    .flatMap(move =>
      move.version_group_details
        .filter(group => group.version_group.name === 'gold-silver')
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
    setMovesGoldSilver(moveData)
  }, [movesAll])

  useEffect(() => {
    const moveData = movesAll
    .flatMap(move =>
      move.version_group_details
        .filter(group => group.version_group.name === 'crystal')
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
    setMovesCrystal(moveData)
  }, [movesAll])

  useEffect(() => {
    const moveData = movesAll
    .flatMap(move =>
      move.version_group_details
        .filter(group => group.version_group.name === 'ruby-sapphire')
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
    setMovesRubySapphire(moveData)
  }, [movesAll])

  useEffect(() => {
    const moveData = movesAll
    .flatMap(move =>
      move.version_group_details
        .filter(group => group.version_group.name === 'firered-leafgreen')
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
    setMovesFireRedLeafGreen(moveData)
  }, [movesAll])

  useEffect(() => {
    const moveData = movesAll
    .flatMap(move =>
      move.version_group_details
        .filter(group => group.version_group.name === 'emerald')
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
    setMovesEmerald(moveData)
  }, [movesAll])

  useEffect(() => {
    const moveData = movesAll
    .flatMap(move =>
      move.version_group_details
        .filter(group => group.version_group.name === 'diamond-pearl')
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
    setMovesDiamondPearl(moveData)
  }, [movesAll])

  useEffect(() => {
    const moveData = movesAll
    .flatMap(move =>
      move.version_group_details
        .filter(group => group.version_group.name === 'heartgold-soulsilver')
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
    setMovesHeartGoldSoulSilver(moveData)
  }, [movesAll])

  useEffect(() => {
    const moveData = movesAll
    .flatMap(move =>
      move.version_group_details
        .filter(group => group.version_group.name === 'platinum')
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
    setMovesPlatinum(moveData)
  }, [movesAll])

  const contextValues = {
    movesAll,
    movesLevelUp,
    movesRedBlue,
    movesYellow,
    movesGoldSilver,
    movesCrystal,
    movesRubySapphire,
    movesFireRedLeafGreen,
    movesEmerald,
    movesDiamondPearl,
    movesHeartGoldSoulSilver,
    movesPlatinum,
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