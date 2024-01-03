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
        <ListItemTextWrapper bold>
          Level
        </ListItemTextWrapper>
        <FlexCenterWrapper
          additionalStyles={{
            width: 1
          }}
        >
          <ListItemText
            primary='Name'
            primaryTypographyProps={{
              fontWeight: 600,
            }}
          />
        </FlexCenterWrapper>
      </ListItem>
      {movesLevelUp['red-blue']?.map(move => (
        <React.Fragment
          key={move.move.name + move.version_group_details.level_learned_at}
        >
          <ListItem>
            <FlexCenterWrapper
              additionalStyles={{
                width: 1,
              }}
            >
              <ListItemText primary={move.version_group_details.level_learned_at} />
            </FlexCenterWrapper>
            <FlexCenterWrapper
              additionalStyles={{
                width: 1,
              }}
            >
              <ListItemText
                primary={removeHyphens(move.move.name)}
                primaryTypographyProps={{
                  color: 'primary'
                }}
              />
            </FlexCenterWrapper>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  )
}

export default RedBlue