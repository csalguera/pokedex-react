// components
import HeaderWrapper from "../common/HeaderWrapper"
import ListItemTextWrapper from "../common/ListItemTextWrapper"
import RedBlue from "./RedBlue"
import Yellow from "./Yellow"

// mui components
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"

const Moves = () => {
  return (
    <>
      <HeaderWrapper
        otherVariant='h5'
      >
        Moves
      </HeaderWrapper>
      <List
        sx={{
          width: 1,
          maxWidth: 800,
        }}
      >
        <ListItem>
          <ListItemTextWrapper bold>Level</ListItemTextWrapper>
          <ListItemTextWrapper bold>Name</ListItemTextWrapper>
          <ListItemTextWrapper bold>Type</ListItemTextWrapper>
          <ListItemTextWrapper bold>Category</ListItemTextWrapper>
          <ListItemTextWrapper bold>Base Power</ListItemTextWrapper>
          <ListItemTextWrapper bold>Accuracy</ListItemTextWrapper>
          <ListItemTextWrapper bold>PP</ListItemTextWrapper>
        </ListItem>
        <RedBlue />
        <Yellow />
      </List>
    </>
  )
}

export default Moves