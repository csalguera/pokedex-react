// npm modules
import { useContext, useEffect, useState } from "react"

// components
import LinkWrapper from "../common/LinkWrapper"

// mui components
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"

// utilities
import { validateForm } from "../../utilities/utilities"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"
import { OverflowContext } from "../../context/OverflowProvider"

const AlternateForm = () => {
  const {
    pokemonSpecies,
    genPath,
    genNum,
  } = useContext(PokemonDetailsContext)

  const { setHidden } = useContext(OverflowContext)

  const [form, setForm] = useState('')

  const handleChange = (e) => {
    setForm(e.target.value)
  }

  const handleOpen = () => {
    setHidden(true)
  }

  const handleClose = () => {
    setHidden(false)
  }

  useEffect(() => {
    if (pokemonSpecies?.varieties?.length > 1) {
      setForm(validateForm(pokemonSpecies?.varieties?.[0]?.pokemon?.name))
    }
  }, [pokemonSpecies?.varieties])

  return (
    <ListItem>
      <ListItemText primary='Forms' />
      {pokemonSpecies?.varieties?.length > 1 &&
        <FormControl>
          <Select
            value={form}
            onChange={handleChange}
            onOpen={handleOpen}
            onClose={handleClose}
            displayEmpty
          >
            {pokemonSpecies?.varieties?.map(variety => (
              <MenuItem
                key={variety?.pokemon?.name}
                value={validateForm(variety?.pokemon?.name)}
                sx={{
                  color: 'primary.main',
                  backgroundColor: 'background.paper'
                }}
              >
                {validateForm(variety?.pokemon?.name)}
                {/* <LinkWrapper
                  to={`/${genPath}/${variety?.pokemon?.name}`}
                  state={{ ...variety?.pokemon, genNum, genPath }}
                >
                  {validateForm(variety?.pokemon?.name)}
                </LinkWrapper> */}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      }
      {pokemonSpecies?.varieties?.length === 1 &&
        <ListItemText
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
          primary='None'
        />
      }
    </ListItem>
  )
}

export default AlternateForm