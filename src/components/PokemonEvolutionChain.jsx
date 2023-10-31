// npm modules
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import PokemonSprite from "./PokemonSprite";

// services
import { getPokemonDetails, getPokemonSpecies } from "../services/api-calls"

const PokemonEvolutionChain = (props) => {
  const {
    stageOne,
    stageTwo,
    stageThree,
    stageThreeAlt,
    pokemonSpecies,
    spriteVersion,
  } = props

  const [stageOneDetails, setStageOneDetails] = useState({})
  const [stageOneSpecies, setStageOneSpecies] = useState({})
  const [stageTwoDetails, setStageTwoDetails] = useState({})
  const [stageTwoSpecies, setStageTwoSpecies] = useState({})
  const [stageThreeDetails, setStageThreeDetails] = useState({})
  const [stageThreeSpecies, setStageThreeSpecies] = useState({})
  const [stageThreeAltDetails, setStageThreeAltDetails] = useState({})
  const [stageThreeAltSpecies, setStageThreeAltSpecies] = useState({})
  const location = useLocation()

  const stageOneGen = (parseInt(stageOneSpecies.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))
  const stageTwoGen = (parseInt(stageTwoSpecies.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))
  const stageThreeGen = (parseInt(stageThreeSpecies.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))
  const stageThreeAltGen = (parseInt(stageThreeAltSpecies.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))
  const pokemonSpeciesGen = (parseInt(pokemonSpecies.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))

  useEffect(() => {
    const fetchStageOneDetails = async () => {
      if (stageOne) {
        const stageOneData = await getPokemonDetails(stageOne.name)
        setStageOneDetails(stageOneData)
      }
    }
    fetchStageOneDetails()
  }, [stageOne])

  useEffect(() => {
    const fetchStageOneSpecies = async () => {
      if (stageOne) {
        const stageOneData = await getPokemonSpecies(stageOne.name)
        setStageOneSpecies(stageOneData)
      }
    }
    fetchStageOneSpecies()
  }, [stageOne])
  
  useEffect(() => {
    const fetchStageTwoDetails = async () => {
      if (stageTwo) {
        const stageTwoData = await getPokemonDetails(stageTwo.name)
        setStageTwoDetails(stageTwoData)
      }
    }
    fetchStageTwoDetails()
  }, [stageTwo])

  useEffect(() => {
    const fetchStageTwoSpecies = async () => {
      if (stageTwo) {
        const stageTwoData = await getPokemonSpecies(stageTwo.name)
        setStageTwoSpecies(stageTwoData)
      }
    }
    fetchStageTwoSpecies()
  }, [stageTwo])

  useEffect(() => {
    const fetchStageThreeDetails = async () => {
      if (stageThree) {
        const stageThreeData = await getPokemonDetails(stageThree.name)
        setStageThreeDetails(stageThreeData)
      }
    }
    fetchStageThreeDetails()
  }, [stageThree])

  useEffect(() => {
    const fetchStageThreeSpecies = async () => {
      if (stageThree) {
        const stageThreeData = await getPokemonSpecies(stageThree.name)
        setStageThreeSpecies(stageThreeData)
      }
    }
    fetchStageThreeSpecies()
  }, [stageThree])
  
  useEffect(() => {
    const fetchStageThreeAltDetails = async () => {
      if (stageThreeAlt) {
        const stageThreeAltData = await getPokemonDetails(stageThreeAlt.name)
        setStageThreeAltDetails(stageThreeAltData)
      }
    }
    fetchStageThreeAltDetails()
  }, [stageThreeAlt])

  useEffect(() => {
    const fetchStageThreeAltSpecies = async () => {
      if (stageThreeAlt) {
        const stageThreeAltData = await getPokemonSpecies(stageThreeAlt.name)
        setStageThreeAltSpecies(stageThreeAltData)
      }
    }
    fetchStageThreeAltSpecies()
  }, [stageThreeAlt])

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      {stageOne && stageOneGen <= pokemonSpeciesGen ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PokemonSprite
            pokemonDetails={stageOneDetails}
            path={location.pathname}
            spriteVersion={spriteVersion}
          />
        </div>
      ) : (
        <></>
      )}
      {stageTwo && stageTwoGen <= pokemonSpeciesGen ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PokemonSprite
            pokemonDetails={stageTwoDetails}
            path={location.pathname}
            spriteVersion={spriteVersion}
          />
        </div>
      ) : (
        <></>
      )}
      {stageThree && stageThreeGen <= pokemonSpeciesGen ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PokemonSprite
            pokemonDetails={stageThreeDetails}
            path={location.pathname}
            spriteVersion={spriteVersion}
          />
          {stageThreeAltGen <= pokemonSpeciesGen ? (
            <PokemonSprite
              pokemonDetails={stageThreeAltDetails}
              path={location.pathname}
              spriteVersion={spriteVersion}
            />
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default PokemonEvolutionChain