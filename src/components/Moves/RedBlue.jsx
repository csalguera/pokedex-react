// npm modules
import React, { useContext } from "react"

// components
import ListItemTextWrapper from "../common/ListItemTextWrapper"

// mui components
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"

// utilities
import { removeHyphens } from "../../utilities/utilities"

// context
import { PokemonMovesContext } from "../../context/MovesProvider"
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"
import FlexCenterWrapper from "../common/FlexCenterWrapper"

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
    <List
      sx={{
        width: 1,
        maxWidth: 600,
      }}
    >
      <ListItem>
        <ListItemTextWrapper
          bold
        >
          Level
        </ListItemTextWrapper>
        <ListItemTextWrapper
          bold
        >
          Name
        </ListItemTextWrapper>
      </ListItem>
      {movesLevelUp['red-blue']?.map(move => (
        <React.Fragment
          key={move.move.name + move.version_group_details.level_learned_at}
        >
          <ListItem>
            <ListItemTextWrapper>
              {move.version_group_details.level_learned_at}
            </ListItemTextWrapper>
            <ListItemTextWrapper
              color='primary'
            >
              {removeHyphens(move.move.name)}
            </ListItemTextWrapper>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  )
}

export default RedBlue