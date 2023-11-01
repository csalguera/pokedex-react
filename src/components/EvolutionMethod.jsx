// services
import { useEffect, useState } from "react"
import { getItem } from "../services/api-calls"

const EvolutionMethod = (props) => {
  const {
    evolutionMethod
  } = props

  const [item, setItem] = useState({})

  const genderRequirement = (evolutionMethod.gender)
  const heldItemRequirement = (evolutionMethod.held_item)
  const itemUsageRequirement = (evolutionMethod.item)
  const learnMoveRequirement = (evolutionMethod.known_move)
  const learnMoveTypeRequirement = (evolutionMethod.known_move_type)
  const locationRequirement = (evolutionMethod.location)
  const affectionRequirement = (evolutionMethod.min_affection)
  const beautyRequirement = (evolutionMethod.min_beauty)
  const happinessRequirement = (evolutionMethod.min_happiness)
  const levelRequirement = (evolutionMethod.min_level)
  const rainRequirement = (evolutionMethod.needs_overworld_rain)
  const partyMemberRequirement = (evolutionMethod.party_species)
  const partyTypeRequirement = (evolutionMethod.party_type)
  const statRequirement = (evolutionMethod.relative_physical_stats)
  const timeRequirement = (evolutionMethod.time_of_day)
  const tradeRequirement = (evolutionMethod.trade_species)
  const upsideDownRequirement = (evolutionMethod.turn_upside_down)

  const primitiveValueRequirements = [
    genderRequirement,
    affectionRequirement,
    beautyRequirement,
    happinessRequirement,
    levelRequirement,
    rainRequirement,
    statRequirement,
    timeRequirement,
    tradeRequirement,
    upsideDownRequirement
  ]

  const otherRequirements = [
    heldItemRequirement,
    itemUsageRequirement,
    learnMoveRequirement,
    learnMoveTypeRequirement,
    locationRequirement,
    partyMemberRequirement,
    partyTypeRequirement,
  ]

  const typeOfRequirement = (
    genderRequirement ? (
      'Gender'
    ) : heldItemRequirement ? (
      'Held Item'
    ) : itemUsageRequirement ? (
      'Use Item'
    ) : learnMoveRequirement ? (
      'Knows Move'
    ) : learnMoveTypeRequirement ? (
      'Knows Move'
    ) : locationRequirement ? (
      'Level Up Near'
    ) : affectionRequirement ? (
      'Affection'
    ) : beautyRequirement ? (
      'Beauty'
    ) : happinessRequirement ? (
      'Happiness'
    ) : levelRequirement ? (
      'Level'
    ) : rainRequirement ? (
      'Level in Rain'
    ) : partyMemberRequirement ? (
      'In Your Party'
    ) : partyTypeRequirement ? (
      'In Your Party'
    ) : statRequirement ? (
      'Stats'
    ) : timeRequirement ? (
      'Time'
    ) : tradeRequirement ? (
      'Trade'
    ) : (
      'Upside Down'
    )
  )

  useEffect(() => {
    const fetchItem = async () => {
      if (itemUsageRequirement && itemUsageRequirement.name) {
        const itemData = await getItem(itemUsageRequirement.name)
        setItem(itemData)
      }
    }
    fetchItem()
  }, [itemUsageRequirement])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p
        style={{
          margin: '2px'
        }}
      >
        {typeOfRequirement}
      </p>
      {primitiveValueRequirements.map((requirement, idx) => (
        <p key={typeOfRequirement + idx}>{requirement}</p>
      ))}
      {otherRequirements.map((requirement, idx) => (
        <div key={typeOfRequirement + idx}>
          {requirement === itemUsageRequirement ? (
            <img src={item.sprites?.default} alt="" />
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  )
}

export default EvolutionMethod