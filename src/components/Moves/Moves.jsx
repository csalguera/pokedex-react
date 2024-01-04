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
          <ListItemTextWrapper bold width={0.5}>Level</ListItemTextWrapper>
          <ListItemTextWrapper bold width={0.8}>Name</ListItemTextWrapper>
          <ListItemTextWrapper bold width={0.8}>Type</ListItemTextWrapper>
          <ListItemTextWrapper bold width={0.8}>Category</ListItemTextWrapper>
          <ListItemTextWrapper bold width={0.6}>Power</ListItemTextWrapper>
          <ListItemTextWrapper bold width={0.6}>Accuracy</ListItemTextWrapper>
          <ListItemTextWrapper bold width={0.1}>PP</ListItemTextWrapper>
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