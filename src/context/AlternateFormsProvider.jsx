// npm modules
import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

// utilities
import { mapToForm, mapToName, mapToSpecies } from "../utilities/utilities"

// context
import { PokemonDetailsContext } from "./PokemonDetailsProvider"
export const AlternateFormsContext = createContext()

const AlternateFormsProvider = ({ children }) => {
  const {
    location,
    pokemonSpecies,
    genPath,
    genNum,
    currentGen,
    updateSprites,
    sprites,
  } = useContext(PokemonDetailsContext)

  const navigate = useNavigate()
  const [form, setForm] = useState('')

  const disableSelect = (
    (pokemonSpecies?.varieties?.length === 1) ||
    (currentGen === 3 && mapToSpecies(mapToName(form)) !== 'deoxys') ||
    (currentGen === 4 && sprites.spriteGen4 === 0 && mapToSpecies(mapToName(form)) === 'giratina')
  )

  const deoxys = (currentGen === 3 && mapToSpecies(mapToName(form)) === 'deoxys')
  const giratina = (currentGen === 4 && mapToName(form) === 'giratina-origin')
  const disableButton = {
    deoxys,
    giratina,
  }

  const handleChange = (e) => {
    setForm(e.target.value)
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
    if (currentGen !== 3) return
  
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
    currentGen,
    form,
    updateSprites,
  ])

  const contextValues = {
    form,
    disableSelect,
    disableButton,
    handleChange,
    handleClick,
  }

  return (
    <AlternateFormsContext.Provider
      value={contextValues}
    >
      {children}
    </AlternateFormsContext.Provider>
  )
}

export default AlternateFormsProvider