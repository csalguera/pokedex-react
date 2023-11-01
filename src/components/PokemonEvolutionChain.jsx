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
    stageTwoAlt1,
    stageTwoAlt2,
    stageThree,
    stageThreeAlt,
    pokemonDetails,
    pokemonSpecies,
    spriteVersion,
  } = props

  const [stageOneDetails, setStageOneDetails] = useState({})
  const [stageOneSpecies, setStageOneSpecies] = useState({})
  const [stageTwoDetails, setStageTwoDetails] = useState({})
  const [stageTwoSpecies, setStageTwoSpecies] = useState({})
  const [stageTwoAlt1Details, setStageTwoAlt1Details] = useState({})
  const [stageTwoAlt1Species, setStageTwoAlt1Species] = useState({})
  const [stageTwoAlt2Details, setStageTwoAlt2Details] = useState({})
  const [stageTwoAlt2Species, setStageTwoAlt2Species] = useState({})
  const [stageThreeDetails, setStageThreeDetails] = useState({})
  const [stageThreeSpecies, setStageThreeSpecies] = useState({})
  const [stageThreeAltDetails, setStageThreeAltDetails] = useState({})
  const [stageThreeAltSpecies, setStageThreeAltSpecies] = useState({})
  const location = useLocation()

  const stageOneGen = (parseInt(stageOneSpecies.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))
  const stageTwoGen = (parseInt(stageTwoSpecies.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))
  const stageTwoAlt1Gen = (parseInt(stageTwoAlt1Species.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))
  const stageTwoAlt2Gen = (parseInt(stageTwoAlt2Species.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))
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
    const fetchStageTwoAlt1Details = async () => {
      if (stageTwoAlt1) {
        const stageTwoAlt1Data = await getPokemonDetails(stageTwoAlt1.name)
        setStageTwoAlt1Details(stageTwoAlt1Data)
      }
    }
    fetchStageTwoAlt1Details()
  }, [stageTwoAlt1])

  useEffect(() => {
    const fetchStageTwoAlt1Species = async () => {
      if (stageTwoAlt1) {
        const stageTwoAlt1Data = await getPokemonSpecies(stageTwoAlt1.name)
        setStageTwoAlt1Species(stageTwoAlt1Data)
      }
    }
    fetchStageTwoAlt1Species()
  }, [stageTwoAlt1])

  useEffect(() => {
    const fetchStageTwoAlt2Details = async () => {
      if (stageTwoAlt2) {
        const stageTwoAlt2Data = await getPokemonDetails(stageTwoAlt2.name)
        setStageTwoAlt2Details(stageTwoAlt2Data)
      }
    }
    fetchStageTwoAlt2Details()
  }, [stageTwoAlt2])

  useEffect(() => {
    const fetchStageTwoAlt2Species = async () => {
      if (stageTwoAlt2) {
        const stageTwoAlt2Data = await getPokemonSpecies(stageTwoAlt2.name)
        setStageTwoAlt2Species(stageTwoAlt2Data)
      }
    }
    fetchStageTwoAlt2Species()
  }, [stageTwoAlt2])

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
          {stageOneGen > pokemonSpeciesGen &&
          pokemonSpecies?.name !== stageThree?.name ? (
            <>
              <PokemonSprite
                pokemonDetails={pokemonDetails}
                path={location.pathname}
                spriteVersion={spriteVersion}
              />
            </>
          ) : (
            <>
              <PokemonSprite
                pokemonDetails={stageTwoDetails}
                path={location.pathname}
                spriteVersion={spriteVersion}
              />
              <PokemonSprite
                pokemonDetails={stageTwoAlt1Details}
                path={location.pathname}
                spriteVersion={spriteVersion}
              />
              <PokemonSprite
                pokemonDetails={stageTwoAlt2Details}
                path={location.pathname}
                spriteVersion={spriteVersion}
              />
            </>
          )}
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
          <PokemonSprite
            pokemonDetails={stageThreeAltDetails}
            path={location.pathname}
            spriteVersion={spriteVersion}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default PokemonEvolutionChain