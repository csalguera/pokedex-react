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

  const levelTrigger = (trigger.name === 'level-up')
  const tradeTrigger = (trigger.name === 'trade')
  const itemTrigger = (trigger.name === 'use-item')
  const shedTrigger = (trigger.name === 'shed')
  const spinTrigger = (trigger.name === 'spin')
  const towerOfDarknessTrigger = (trigger.name === 'tower-of-darkness')
  const towerOfWatersTrigger = (trigger.name === 'tower-of-waters')
  const threeCriticalHitsTrigger = (trigger.name === 'three-critical-hits')
  const takeDamageTrigger = (trigger.name === 'take-damage')
  const otherTrigger = (trigger.name === 'other')
  const agileStyleMoveTrigger = (trigger.name === 'agile-style-move')
  const strongStyleMoveTrigger = (trigger.name === 'strong-style-move')
  const recoilDamageTrigger = (trigger.name === 'recoil-damage')

  const triggers = (
    levelTrigger ? (
      'Lv.'
    ) : tradeTrigger ? (
      'Trade'
    ) : itemTrigger ? (
      'Use Item'
    ) : shedTrigger ? (
      'Lv.'
    ) : spinTrigger ? (
      'Spin'
    ) : towerOfDarknessTrigger ? (
      'Tower of Darkness'
    ) : towerOfWatersTrigger ? (
      'Tower of Waters'
    ) : threeCriticalHitsTrigger ? (
      '3 Critical Hits'
    ) : takeDamageTrigger ? (
      'Take Damage'
    ) : otherTrigger ? (
      'Other'
    ) : agileStyleMoveTrigger ? (
      'Agile Style Move'
    ) : strongStyleMoveTrigger ? (
      'Strong Style Move'
    ) : recoilDamageTrigger ? (
      'Recoil Damage'
    ) : (
      null
    )
  )

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
        ) ?? (
          <img
            src={beautyCondition}
            alt=""
            width='20px'
          />
        )}
      </p>
      <p style={{ color: `${genderCondition === '♀' ? 'red' : 'blue'}` }}>{genderCondition}</p>
      <img src={item?.sprites?.default} alt="" />
      <img src={heldItem?.sprites?.default} alt="" />
      <p style={{ margin: '0 4px' }}>{friendshipCondition}</p>
      <p style={{ margin: '0 4px' }}>{timeCondition}</p>
      <p>{statCondition}</p>
    </div>
  )
}

export default EvolutionMethod