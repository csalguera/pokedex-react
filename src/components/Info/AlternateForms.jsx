// npm modules
import { useContext } from "react"

// mui components
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"

// utilities
import { mapToForm } from "../../utilities/utilities"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"
import { AlternateFormsContext } from "../../context/AlternateFormsProvider"

const AlternateForms = () => {
  const {
    pokemonSpecies,
    pokemonDetails,
  } = useContext(PokemonDetailsContext)

  const {
    form,
    disableSelect,
    handleChange,
    handleClick,
  } = useContext(AlternateFormsContext)

  const invalidNames = [
    'darmanitan-galar-standard',
    'darmanitan-galar-zen',
    'basculin-white-striped',
  ]

  const validVarieties = pokemonSpecies?.varieties?.filter(variety => !invalidNames.includes(variety?.pokemon?.name))

  if (form !== mapToForm(pokemonDetails?.name)) return
  return (
    <ListItem>
      <ListItemText primary='Forms' />
      {pokemonSpecies?.varieties?.length &&
        <FormControl>
          <Select
            value={form}
            onChange={handleChange}
            displayEmpty
            size="small"
            disabled={disableSelect}
          >
            {validVarieties.map(variety => (
              <MenuItem
                key={variety?.pokemon?.name}
                value={mapToForm(variety?.pokemon?.name)}
                onClick={() => handleClick(variety)}
                sx={{
                  color: 'primary.main',
                  backgroundColor: 'background.paper',
                }}
              >
                {mapToForm(variety?.pokemon?.name) || 'None'}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      }
    </ListItem>
  )
}

export default AlternateForms