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

  const castform = (mapToSpecies(mapToName(form)) === 'castform')
  const deoxys = (mapToSpecies(mapToName(form)) === 'deoxys')
  const wormadam = (mapToSpecies(mapToName(form)) === 'wormadam')
  const rotom = (mapToSpecies(mapToName(form)) === 'rotom')
  const shaymin = (mapToSpecies(mapToName(form)) === 'shaymin')
  const giratina = (mapToSpecies(mapToName(form)) === 'giratina')
  const basculinRed = (mapToName(form) === 'basculin-red-striped')
  const basculinBlue = (mapToName(form) === 'basculin-blue-striped')
  const darmanitan = (mapToName(form) === 'darmanitan-standard')
  const darmanitanZen = (mapToName(form) === 'darmanitan-zen')
  const tornadus = (mapToSpecies(mapToName(form)) === 'tornadus')
  const thundurus = (mapToSpecies(mapToName(form)) === 'thundurus')
  const landorus = (mapToSpecies(mapToName(form)) === 'landorus')
  const kyurem = (mapToSpecies(mapToName(form)) === 'kyurem')

  const validForms = (
    castform ||
    deoxys ||
    wormadam ||
    rotom ||
    shaymin ||
    giratina ||
    basculinRed ||
    basculinBlue ||
    darmanitan ||
    darmanitanZen ||
    tornadus ||
    thundurus ||
    landorus ||
    kyurem
  )

  const disableSelect = (
    (pokemonSpecies?.varieties?.length === 1) ||
    (currentGen <= 5 && !validForms) ||
    (currentGen === 4 && sprites.spriteGen4 === 0 && mapToSpecies(mapToName(form)) === 'rotom') ||
    (currentGen === 4 && sprites.spriteGen4 === 0 && mapToSpecies(mapToName(form)) === 'giratina') ||
    (currentGen === 4 && sprites.spriteGen4 === 0 && mapToSpecies(mapToName(form)) === 'shaymin') ||
    (currentGen === 5 && sprites.spriteGen5 === 0 && mapToSpecies(mapToName(form)) === 'tornadus') ||
    (currentGen === 5 && sprites.spriteGen5 === 0 && mapToSpecies(mapToName(form)) === 'thundurus') ||
    (currentGen === 5 && sprites.spriteGen5 === 0 && mapToSpecies(mapToName(form)) === 'landorus') ||
    (currentGen === 5 && sprites.spriteGen5 === 0 && mapToSpecies(mapToName(form)) === 'kyurem')
  )

  const disableButton = {
    deoxys: (currentGen === 3 && mapToSpecies(mapToName(form)) === 'deoxys'),
    rotom: (currentGen === 4 && mapToName(form).includes('rotom-')),
    giratina: (currentGen === 4 && mapToName(form) === 'giratina-origin'),
    shaymin: (currentGen === 4 && mapToName(form) === 'shaymin-sky'),
    tornadus: (currentGen === 5 && mapToName(form) === 'tornadus-therian'),
    thundurus: (currentGen === 5 && mapToName(form) === 'thundurus-therian'),
    landorus: (currentGen === 5 && mapToName(form) === 'landorus-therian'),
    kyurem: (currentGen === 5 && mapToName(form).includes('kyurem-'))
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