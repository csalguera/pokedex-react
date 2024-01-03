// components
import ListItemTextWrapper from "../common/ListItemTextWrapper"

// mui components
import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"

// utilities
import { removeHyphens } from "../../utilities/utilities"

const Move = (props) => {
  const { move } = props

  return (
    <>
      <ListItem>
        <ListItemTextWrapper>
          {move.version_group_details.level_learned_at}
        </ListItemTextWrapper>
        <ListItemTextWrapper
          color='primary'
        >
          {removeHyphens(move.move.name)}
        </ListItemTextWrapper>
        <ListItemTextWrapper>
          Normal
        </ListItemTextWrapper>
        <ListItemTextWrapper>
          Status
        </ListItemTextWrapper>
      </ListItem>
      <Divider />
    </>
  )
}

export default Move