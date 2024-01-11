// npm modules
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

// mui components
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"

// utilities
import { mapToForm, mapToName } from "../../utilities/utilities"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"
import { OverflowContext } from "../../context/OverflowProvider"

const AlternateForms = () => {
  const {
    location,
    pokemonSpecies,
    genPath,
    genNum,
    updateSprites,
  } = useContext(PokemonDetailsContext)

  const { setHidden } = useContext(OverflowContext)

  const navigate = useNavigate()
  const [form, setForm] = useState('')
  const disableSelect = (
    (pokemonSpecies?.varieties?.length === 1) ||
    (genNum === 3 && mapToName(form) !== 'deoxys')
  )

  const handleChange = (e) => {
    setForm(e.target.value)
  }

  const handleOpen = () => {
    setHidden(true)
  }

  const handleClose = () => {
    setHidden(false)
  }

  const handleClick = (variety) => {
    navigate(`/${genPath}/${variety?.pokemon?.name}`, {
      state: { ...variety?.pokemon, genNum, genPath }
    })
  }

  useEffect(() => {
    if (pokemonSpecies?.varieties?.length > 1) {
      setForm(mapToForm(location.state.name ?? pokemonSpecies?.varieties?.[0]?.pokemon?.name))
    } else {
      setForm('')
    }
  }, [
    location.state.name,
    pokemonSpecies?.varieties
  ])

  useEffect(() => {
    if (genNum !== 3) return
  
    if (mapToName(form) === 'deoxys-normal') {
      updateSprites('spriteGen3', 0)
    } else if (mapToName(form) === 'deoxys-attack') {
      updateSprites('spriteGen3', 1)
    } else if (mapToName(form) === 'deoxys-defense') {
      updateSprites('spriteGen3', 1)
    } else if (mapToName(form) === 'deoxys-speed') {
      updateSprites('spriteGen3', 2)
    }
  }, [
    genNum,
    form,
    updateSprites,
  ])

  return (
    <ListItem>
      <ListItemText primary='Forms' />
      {pokemonSpecies?.varieties?.length &&
        <FormControl>
          <Select
            value={form}
            onChange={handleChange}
            onOpen={handleOpen}
            onClose={handleClose}
            displayEmpty
            size="small"
            disabled={disableSelect}
          >
            {pokemonSpecies?.varieties?.map(variety => (
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