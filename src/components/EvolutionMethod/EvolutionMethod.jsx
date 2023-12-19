// services
import { useEffect, useState } from "react"
import { getItem, getEvolutionTrigger } from "../../services/api-calls"

// components
import ConditionText from "./ConditionText"
import ConditionImg from "./ConditionImg"
import ConditionBeauty from "./ConditionBeauty"
import FlexCenterWrapper from "../common/FlexCenterWrapper"

// mui components
import Typography from "@mui/material/Typography"

// utilities
import { removeHyphens } from "../../utilities/utilities"

const EvolutionMethod = (props) => {
  const {
    evolutionMethod,
  } = props

  const [trigger, setTrigger] = useState({})
  const [item, setItem] = useState({})
  const [heldItem, setHeldItem] = useState({})

  let triggers

  switch (trigger.name) {
    case 'level-up':
      triggers = 'Lv.'
      break
    case 'trade':
      triggers = 'Trade'
      break
    case 'use-item':
      triggers = 'Use Item'
      break
    case 'held-item':
      triggers = 'Lv.'
      break
    case 'spin':
      triggers = 'Spin'
      break
    case 'tower-of-darkness':
      triggers = 'Tower of Darkness'
      break
    case 'tower-of-waters':
      triggers = 'Tower of Waters'
      break
    case 'three-critical-hits':
      triggers = '3 Critical Hits'
      break
    case 'take-damage':
      triggers = 'Take Damage'
      break
    case 'other':
      triggers = 'Other'
      break
    case 'agile-style-move':
      triggers = 'Agile Style Move'
      break
    case 'strong-style-move':
      triggers = 'Strong Style Move'
      break
    case 'recoil-damage':
      triggers = 'Recoil Damage'
      break
    default:
      triggers = null
  }

  const levelCondition = (
    evolutionMethod?.min_level
  )

  const genderCondition = (
    evolutionMethod?.gender === 1 ? (
      '♀'
    ) : evolutionMethod?.gender === 2 ? (
      '♂'
    ) : (
      null
    )
  )

  const genderColor = (
    genderCondition === '♀' ? (
      'red'
    ) : (
      'blue'
    )
  )

  const heldItemCondition = (
    evolutionMethod?.held_item
  )

  const useItemCondition = (
    evolutionMethod?.item
  )

  const friendshipCondition = (
    evolutionMethod?.min_happiness ? (
      '❤️'
    ) : (
      null
    )
  )

  const timeCondition = (
    evolutionMethod?.time_of_day === 'day' ? (
      '☀️'
    ) : evolutionMethod?.time_of_day === 'night' ? (
      '🌙'
    ) : (
      null
    )
  )

  const statCondition = (
    evolutionMethod?.relative_physical_stats > 0 ? (
      'Atk > Def'
    ) : evolutionMethod?.relative_physical_stats < 0 ? (
      'Atk < Def'
    ) : evolutionMethod?.relative_physical_stats === 0 ? (
      'Atk = Def'
    ) : (
      null
    )
  )

  const shedCondition = (
    trigger.name === 'shed' ? (
      'Lv. 20 & Empty Slot in Party'
    ) : (
      null
    )
  )

  const beautyCondition = (
    evolutionMethod?.min_beauty ? (
      'https://archives.bulbagarden.net/media/upload/5/5e/Blue_Pok%C3%A9block_Sprite.png'
    ) : (
      null
    )
  )

  const knownMove = (evolutionMethod?.known_move?.name)
  const knownMoveCondition = (
    knownMove ? (
      `w/ ${removeHyphens(knownMove)}`
    ) : (
      null
    )
  )

  const evolveLocation = (evolutionMethod?.location?.name)
  const locationCondition = (
    evolveLocation ? (
      `at ${removeHyphens(evolveLocation)}`
    ) : (
      null
    )
  )

  useEffect(() => {
    const fetchTrigger = async () => {
      if (evolutionMethod?.trigger?.name) {
        const triggerData = await getEvolutionTrigger(evolutionMethod?.trigger?.name)
        setTrigger(triggerData)
      }
    }
    fetchTrigger()
  }, [evolutionMethod?.trigger?.name])

  useEffect(() => {
    const fetchItem = async () => {
      if (useItemCondition && useItemCondition.name) {
        const itemData = await getItem(useItemCondition.name)
        setItem(itemData)
      }
      if (heldItemCondition && heldItemCondition.name) {
        const heldItemData = await getItem(heldItemCondition.name)
        setHeldItem(heldItemData)
      }
    }
    fetchItem()
  }, [useItemCondition, heldItemCondition])

  const itemConditions = [
    {
      item: useItemCondition,
      sprite: item,
    },
    {
      item: heldItemCondition,
      sprite: heldItem,
    },
  ]

  const otherConditions = [
    {
      condition: genderCondition,
      color: genderColor,
    },
    {
      condition: friendshipCondition,
    },
    {
      condition: timeCondition,
    },
    {
      condition: statCondition,
      color: 'primary.main',
    },
    {
      condition: knownMoveCondition,
      color: 'primary.main',
    },
    {
      condition: locationCondition,
      color: 'primary.main',
    },
  ]

  const validItemCoditions = itemConditions.filter(item => item.sprite.name)
  const validOtherConditions = otherConditions.filter(other => other.condition)

  return (
    <FlexCenterWrapper
      additionalStyles={{
        m: 0.25,
      }}
    >
      <Typography
        sx={{
          m: 0.25,
        }}
      >
        {triggers}
      </Typography>
      <Typography
        sx={{
          m: 0.25,
        }}
      >
        {levelCondition ?? shedCondition}
      </Typography>
      {validItemCoditions.map(item => (
        <ConditionImg
          key={item.sprite.name}
          condition={item}
          item={item.sprite}
        />
      ))}
      {validOtherConditions.map(other => (
        <ConditionText
          key={other.condition}
          condition={other.condition}
          color={other.color}
        />
      ))}
      <ConditionBeauty
        beautyCondition={beautyCondition}
      />
    </FlexCenterWrapper>
  )
}

export default EvolutionMethod