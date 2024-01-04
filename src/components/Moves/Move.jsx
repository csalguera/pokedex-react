// npm modules
import { useEffect, useState, useContext } from "react"

// components
import ListItemTextWrapper from "../common/ListItemTextWrapper"
import TypeBadge from "../Type/TypeBadge"
import DamageClass from "./DamageClass"

// mui components
import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"

// servies
import { getMove } from "../../services/api-calls"

// utilities
import { removeHyphens } from "../../utilities/utilities"
import { determineMoveGen } from "../../utilities/data"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const Move = (props) => {
  const { moveEl, versionGroup } = props
  const { currentGen } = useContext(PokemonDetailsContext)

  const [move, setMove] = useState({})
  const type = (move?.type)
  const pastMoveType = (move?.past_values?.[0]?.type)
  const moveGen = (currentGen < determineMoveGen(move))
  const level = (moveEl.version_group_details.level_learned_at)
  const category = (move?.damage_class?.name)
  const power = (move?.power)
  const accuracy = (move?.accuracy)

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
        <ListItemTextWrapper
          width={0.5}
        >
          {level <= 1 ? '-' : level}
        </ListItemTextWrapper>
        <ListItemTextWrapper
          color='primary'
          width={0.8}
        >
          {removeHyphens(move?.name ?? '')}
        </ListItemTextWrapper>
        <ListItemTextWrapper
          width={0.8}
        >
          {pastMoveType && moveGen ? (
            <TypeBadge type={pastMoveType ?? ''} />
          ) : (
            <TypeBadge type={type ?? ''} />
          )}
        </ListItemTextWrapper>
        <ListItemTextWrapper
          width={0.8}
        >
          <DamageClass
            power={power}
            type={type}
            category={category}
            versionGroup={versionGroup}
          />
        </ListItemTextWrapper>
        <ListItemTextWrapper
          width={0.6}
        >
          {power ? power : '-'}
        </ListItemTextWrapper>
        <ListItemTextWrapper
          width={0.6}
        >
          {accuracy ? `${accuracy}%` : '-'}
        </ListItemTextWrapper>
        <ListItemTextWrapper
          width={0.1}
        >
          {move?.pp}
        </ListItemTextWrapper>
      </ListItem>
      <Divider />
    </>
  )
}

export default Move