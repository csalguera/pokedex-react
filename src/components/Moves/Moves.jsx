// components
import HeaderWrapper from "../common/HeaderWrapper"
import ListItemTextWrapper from "../common/ListItemTextWrapper"
import MoveLevelUp from "./MoveLevelUp"

// mui components
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"

// utilities
import { versions } from "../../utilities/data"

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
        {versions.map(version => (
          <MoveLevelUp
            key={version.versionGroup + version.versionNum}
            versionGroup={version.versionGroup}
            versionGen={version.versionGen}
            versionNum={version.versionNum}
            spriteGen={version.spriteGen}
          />
        ))}
      </List>
    </>
  )
}

export default Moves