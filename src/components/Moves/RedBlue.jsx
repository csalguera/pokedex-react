// npm modules
import React, { useContext } from "react"

// components
import ListItemTextWrapper from "../common/ListItemTextWrapper"
import Move from './Move'

// mui components
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"

// context
import { PokemonMovesContext } from "../../context/MovesProvider"
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

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
        maxWidth: 800,
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
        <ListItemTextWrapper
          bold
        >
          Type
        </ListItemTextWrapper>
        <ListItemTextWrapper
          bold
        >
          Category
        </ListItemTextWrapper>
        <ListItemTextWrapper
          bold
        >
          Base Power
        </ListItemTextWrapper>
        <ListItemTextWrapper
          bold
        >
          PP
        </ListItemTextWrapper>
      </ListItem>
      {movesLevelUp['red-blue']?.map(moveEl => (
        <Move
          key={moveEl.move.name + moveEl.version_group_details.level_learned_at}
          moveEl={moveEl}
        />
      ))}
    </List>
  )
}

export default RedBlue