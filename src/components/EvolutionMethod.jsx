// services
import { useEffect, useState } from "react"
import { getItem, getEvolutionTrigger } from "../services/api-calls"

const EvolutionMethod = (props) => {
  const {
    evolutionMethod
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
    evolutionMethod.min_level
  )

  const genderCondition = (
    evolutionMethod.gender === 1 ? (
      '♀'
    ) : evolutionMethod.gender === 2 ? (
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
    evolutionMethod.held_item
  )

  const useItemCondition = (
    evolutionMethod.item
  )

  const friendshipCondition = (
    evolutionMethod.min_happiness ? (
      '❤️'
    ) : (
      null
    )
  )

  const timeCondition = (
    evolutionMethod.time_of_day === 'day' ? (
      '☀️'
    ) : evolutionMethod.time_of_day === 'night' ? (
      '🌙'
    ) : (
      null
    )
  )

  const statCondition = (
    evolutionMethod.relative_physical_stats > 0 ? (
      'Atk > Def'
    ) : evolutionMethod.relative_physical_stats < 0 ? (
      'Atk < Def'
    ) : evolutionMethod.relative_physical_stats === 0 ? (
      'Atk = Def'
    ) : (
      null
    )
  )

  const shedCondition = (
    trigger.name === 'shed' ? (
      '20 & Empty Slot in Party'
    ) : (
      null
    )
  )

  const beautyCondition = (
    evolutionMethod.min_beauty ? (
      'https://archives.bulbagarden.net/media/upload/5/5e/Blue_Pok%C3%A9block_Sprite.png'
    ) : (
      null
    )
  )

  useEffect(() => {
    const fetchTrigger = async () => {
      const triggerData = await getEvolutionTrigger(evolutionMethod.trigger.name)
      setTrigger(triggerData)
    }
    fetchTrigger()
  }, [evolutionMethod.trigger.name])

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

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2px',
      }}
    >
      <p style={{ margin: '2px' }}>{triggers}</p>
      <p style={{ margin: '2px' }}>
        {levelCondition ?? (
          shedCondition
        )}
      </p>
      {useItemCondition ? (
        <img src={item?.sprites?.default} alt="" />
        ) : (
          null
      )}
      {heldItemCondition ? (
        <img src={heldItem?.sprites?.default} alt="" />
        ) : (
          null
      )}
      {genderCondition ? (
        <p style={{ color: genderColor }}>{genderCondition}</p>
      ) : (
        null
      )}
      {friendshipCondition ? (
        <p style={{ margin: '0 4px' }}>{friendshipCondition}</p>
      ) : (
        null
      )}
      {timeCondition ? (
        <p style={{ margin: '0 4px' }}>{timeCondition}</p>
      ) : (
        null
      )}
      {statCondition ? (
        <p>{statCondition}</p>
      ) : (
        null
      )}
      {beautyCondition ? (
        <img
          style={{ margin: '0 8px 0 0' }}
          src={beautyCondition}
          alt="" 
          width='20px'
        />
      ) : (
        null
      )}
    </div>
  )
}

export default EvolutionMethod