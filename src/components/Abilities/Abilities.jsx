// npm modules
import { useContext } from "react"

// components
import Ability from "./Ability"
import HiddenAbility from "./HiddenAbility"
import FlexCenterWrapper from "../common/FlexCenterWrapper"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const Abilities = () => {
  const {
    currentGen,
    pokemonDetails,
  } = useContext(PokemonDetailsContext)

  if (currentGen < 3) return
  return (
    <>
      {pokemonDetails?.abilities?.map(ability => (
        <FlexCenterWrapper
          key={ability.slot}
        >
          <Ability
            ability={ability}
          />
          <HiddenAbility
            ability={ability}
          />
        </FlexCenterWrapper>
      ))}
    </>
  )
}

export default Abilities