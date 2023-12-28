// environment variables
import { baseURL } from "../../services/api-calls"

// npm modules
import { useContext } from "react"

// components
import Ability from "./Ability"
import NoAbility from "./NoAbility"

// mui components
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const Abilities = () => {
  const {
    currentGen,
    pokemonDetails,
  } = useContext(PokemonDetailsContext)

  const pastAbilities = (pokemonDetails?.past_abilities?.[0]?.abilities)
  const pastAbilitiesGen = parseInt(pokemonDetails?.past_abilities?.[0]?.generation?.url.replace(`${baseURL}/generation/`, '').replace('/', ''))
  const abilities = (pokemonDetails?.abilities)

  if (currentGen < 3) return <NoAbility />
  return (
    <>
      <ListItem
        sx={{
          width: '100%',
        }}
      >
        <ListItemText
          primary='Abilities'
          primaryTypographyProps={{
            fontWeight: 600,
            textAlign: 'center',
          }}
        />
      </ListItem>
      {pastAbilitiesGen >= currentGen ? (
        pastAbilities?.map(abilityEl => (
          <Ability
            key={abilityEl.slot}
            abilityEl={abilityEl}
          />
        ))
      ) : (
        abilities?.map(abilityEl => (
          <Ability
            key={abilityEl.slot}
            abilityEl={abilityEl}
          />
        ))
      )}
    </>
  )
}

export default Abilities