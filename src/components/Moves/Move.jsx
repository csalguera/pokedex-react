// npm modules
import { useEffect, useState, useContext } from "react"

// components
import ListItemTextWrapper from "../common/ListItemTextWrapper"
import TypeBadge from "../Type/TypeBadge"

// mui components
import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"

// servies
import { getMove } from "../../services/api-calls"

// utilities
import { pascalize, removeHyphens } from "../../utilities/utilities"
import { determineMoveGen } from "../../utilities/data"

import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const Move = (props) => {
  const { moveEl } = props
  const { currentGen } = useContext(PokemonDetailsContext)

  const [move, setMove] = useState({})
  const pastMoveType = (move?.past_values?.[0]?.type)
  const moveGen = (currentGen < determineMoveGen(move))

  useEffect(() => {
    const fetchMoveData = async () => {
      if (moveEl && moveEl.move.name) {
        const moveData = await getMove(moveEl.move.name)
        setMove(moveData)
      }
    }
    fetchMoveData()
  }, [moveEl, moveEl.move.name])

  if(!move) return
  return (
    <>
      <ListItem>
        <ListItemTextWrapper>
          {moveEl.version_group_details.level_learned_at}
        </ListItemTextWrapper>
        <ListItemTextWrapper
          color='primary'
        >
          {removeHyphens(moveEl.move.name)}
        </ListItemTextWrapper>
        <ListItemTextWrapper>
          {pastMoveType && moveGen ? (
            <TypeBadge type={pastMoveType ?? ''} />
          ) : (
            <TypeBadge type={move?.type ?? ''} />
          )}
        </ListItemTextWrapper>
        <ListItemTextWrapper>
          {pascalize(move?.damage_class?.name ?? '')}
        </ListItemTextWrapper>
        <ListItemTextWrapper>
          {move?.power ? move?.power : '-'}
        </ListItemTextWrapper>
        <ListItemTextWrapper>
          {move?.accuracy ? move?.accuracy : '-'}
        </ListItemTextWrapper>
        <ListItemTextWrapper>
          {move?.pp}
        </ListItemTextWrapper>
      </ListItem>
      <Divider />
    </>
  )
}

export default Move