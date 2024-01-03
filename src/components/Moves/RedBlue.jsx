// npm modules
import React, { useContext } from "react"

// components
import ListItemTextWrapper from "../common/ListItemTextWrapper"
import Move from './Move'

// mui components
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"

// utilities
import { removeHyphens } from "../../utilities/utilities"

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
        <ListItemTextWrapper
          bold
        >
          Type
        </ListItemTextWrapper>
        <ListItemTextWrapper
          bold
        >
          Class
        </ListItemTextWrapper>
      </ListItem>
      {movesLevelUp['red-blue']?.map(move => (
        <Move
          key={move.move.name + move.version_group_details.level_learned_at}
          move={move}
        />
      ))}
    </List>
  )
}

export default RedBlue