// npm modules
import { useEffect, useState } from "react"

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

const Move = (props) => {
  const { moveEl } = props

  const [move, setMove] = useState({})

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
          
          <TypeBadge type={move?.type ?? ''} />
        </ListItemTextWrapper>
        <ListItemTextWrapper>
          {pascalize(move?.damage_class?.name ?? '')}
        </ListItemTextWrapper>
      </ListItem>
      <Divider />
    </>
  )
}

export default Move