// npm modules
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

// components
import PokemonSprite from "./PokemonSprite";
import EvolutionMethod from "./EvolutionMethod";

// services
import { getPokemonDetails, getPokemonSpecies } from "../services/api-calls"

const PokemonEvolutionChain = (props) => {
  const {
    pokemonDetails,
    pokemonSpecies,
    evolutionChain,
    spriteVersion,
  } = props

  const [stageOneDetails, setStageOneDetails] = useState({})
  const [stageOneSpecies, setStageOneSpecies] = useState({})
  const [stageTwoDetails, setStageTwoDetails] = useState({})
  const [stageTwoSpecies, setStageTwoSpecies] = useState({})
  const [stageTwoAlt1Details, setStageTwoAlt1Details] = useState({})
  const [stageTwoAlt2Details, setStageTwoAlt2Details] = useState({})
  const [stageTwoAlt3Details, setStageTwoAlt3Details] = useState({})
  const [stageTwoAlt4Details, setStageTwoAlt4Details] = useState({})
  const [stageThreeDetails, setStageThreeDetails] = useState({})
  const [stageThreeSpecies, setStageThreeSpecies] = useState({})
  const [stageThreeAltDetails, setStageThreeAltDetails] = useState({})
  const [stageThreeAltStageTwoDetails, setStageThreeAltStageTwoDetails] = useState({})
  const location = useLocation()

  const stageOne = (evolutionChain.chain)
  const stageTwo = (evolutionChain.chain?.evolves_to[0])
  const stageTwoAlt1 = (evolutionChain.chain?.evolves_to[1])
  const stageTwoAlt2 = (evolutionChain.chain?.evolves_to[2])
  const stageTwoAlt3 = (evolutionChain.chain?.evolves_to[3])
  const stageTwoAlt4 = (evolutionChain.chain?.evolves_to[4])
  const stageThree = (evolutionChain.chain?.evolves_to[0]?.evolves_to[0])
  const stageThreeAlt = (evolutionChain.chain?.evolves_to[0]?.evolves_to[1])
  const stageThreeAltStageTwo = (evolutionChain.chain?.evolves_to[1]?.evolves_to[0])

  const stageTwoEvolutionMethod = stageTwo?.evolution_details[0]
  const stageTwoAlt1EvolutionMethod = stageTwoAlt1?.evolution_details[0]
  const stageTwoAlt2EvolutionMethod = stageTwoAlt2?.evolution_details[0]
  const stageTwoAlt3EvolutionMethod = stageTwoAlt3?.evolution_details[0]
  const stageTwoAlt4EvolutionMethod = stageTwoAlt4?.evolution_details[0]
  const stageThreeEvolutionMethod = stageThree?.evolution_details[0]

  const stageOneGen = (parseInt(stageOneSpecies.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))
  const stageTwoGen = (parseInt(stageTwoSpecies.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))
  const stageThreeGen = (parseInt(stageThreeSpecies.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))

  const gen1 = (location.pathname.includes('/gen-i/'))
  const gen2 = (location.pathname.includes('/gen-ii/'))
  const gen3 = (location.pathname.includes('/gen-iii/'))

  const genNum = (
    gen1 ? (
      1 
    ) : gen2 ? (
      2
    ) : gen3 ? (
      3
    ) : (
      null
    ))

  const genPath = (
    genNum === 1 ? (
      'gen-i'
    ) : genNum === 2 ? (
      'gen-ii'
    ) : (
      'gen-iii'
    ))

  useEffect(() => {
    const fetchStageOneDetails = async () => {
      if (stageOne?.species) {
        const stageOneData = await getPokemonDetails(stageOne?.species.name)
        setStageOneDetails(stageOneData)
      }
    }
    fetchStageOneDetails()
  }, [stageOne])

  useEffect(() => {
    const fetchStageOneSpecies = async () => {
      if (stageOne?.species) {
        const stageOneData = await getPokemonSpecies(stageOne?.species.name)
        setStageOneSpecies(stageOneData)
      }
    }
    fetchStageOneSpecies()
  }, [stageOne])
  
  useEffect(() => {
    const fetchStageTwoDetails = async () => {
      if (stageTwo?.species) {
        const stageTwoData = await getPokemonDetails(stageTwo?.species.name)
        setStageTwoDetails(stageTwoData)
      }
    }
    fetchStageTwoDetails()
  }, [stageTwo])

  useEffect(() => {
    const fetchStageTwoSpecies = async () => {
      if (stageTwo?.species) {
        const stageTwoData = await getPokemonSpecies(stageTwo?.species.name)
        setStageTwoSpecies(stageTwoData)
      }
    }
    fetchStageTwoSpecies()
  }, [stageTwo])

  useEffect(() => {
    const fetchStageTwoAlt1Details = async () => {
      if (stageTwoAlt1?.species) {
        const stageTwoAlt1Data = await getPokemonDetails(stageTwoAlt1?.species.name)
        setStageTwoAlt1Details(stageTwoAlt1Data)
      }
    }
    fetchStageTwoAlt1Details()
  }, [stageTwoAlt1])

  useEffect(() => {
    const fetchStageTwoAlt2Details = async () => {
      if (stageTwoAlt2?.species) {
        const stageTwoAlt2Data = await getPokemonDetails(stageTwoAlt2?.species.name)
        setStageTwoAlt2Details(stageTwoAlt2Data)
      }
    }
    fetchStageTwoAlt2Details()
  }, [stageTwoAlt2])

  useEffect(() => {
    const fetchStageTwoAlt3Details = async () => {
      if (stageTwoAlt3?.species) {
        const stageTwoAlt3Data = await getPokemonDetails(stageTwoAlt3?.species.name)
        setStageTwoAlt3Details(stageTwoAlt3Data)
      }
    }
    fetchStageTwoAlt3Details()
  }, [stageTwoAlt3])

  useEffect(() => {
    const fetchStageTwoAlt4Details = async () => {
      if (stageTwoAlt4?.species) {
        const stageTwoAlt4Data = await getPokemonDetails(stageTwoAlt4?.species.name)
        setStageTwoAlt4Details(stageTwoAlt4Data)
      }
    }
    fetchStageTwoAlt4Details()
  }, [stageTwoAlt4])

  useEffect(() => {
    const fetchStageThreeDetails = async () => {
      if (stageThree?.species) {
        const stageThreeData = await getPokemonDetails(stageThree?.species.name)
        setStageThreeDetails(stageThreeData)
      }
    }
    fetchStageThreeDetails()
  }, [stageThree])

  useEffect(() => {
    const fetchStageThreeSpecies = async () => {
      if (stageThree?.species) {
        const stageThreeData = await getPokemonSpecies(stageThree?.species.name)
        setStageThreeSpecies(stageThreeData)
      }
    }
    fetchStageThreeSpecies()
  }, [stageThree])
  
  useEffect(() => {
    const fetchStageThreeAltDetails = async () => {
      if (stageThreeAlt?.species) {
        const stageThreeAltData = await getPokemonDetails(stageThreeAlt?.species.name)
        setStageThreeAltDetails(stageThreeAltData)
      }
    }
    fetchStageThreeAltDetails()
  }, [stageThreeAlt])

  useEffect(() => {
    const fetchStageThreeAltStageTwoDetails = async () => {
      if (stageThreeAltStageTwo?.species) {
        const stageThreeAltStageTwoData = await getPokemonDetails(stageThreeAltStageTwo?.species.name)
        setStageThreeAltStageTwoDetails(stageThreeAltStageTwoData)
      }
    }
    fetchStageThreeAltStageTwoDetails()
  }, [stageThreeAltStageTwo])

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      {stageOne && stageOneGen <= genNum ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Link
            to={`/${genPath}/${stageOneDetails.name}`}
            state={stageOneDetails}
          >
            <PokemonSprite
              pokemonDetails={stageOneDetails}
              path={location.pathname}
              spriteVersion={spriteVersion}
            />
          </Link>
        </div>
      ) : (
        <></>
      )}
      {stageTwo && stageTwoGen <= genNum ? (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            <EvolutionMethod
              evolutionMethod={stageTwoEvolutionMethod}
            />
            {stageTwoAlt1Details.name ? (
              <EvolutionMethod
                evolutionMethod={stageTwoAlt1EvolutionMethod}
              />
            ) : (
              <></>
            )}
            {stageTwoAlt2Details.name ? (
              <EvolutionMethod
                evolutionMethod={stageTwoAlt2EvolutionMethod}
              />
            ) : (
              <></>
            )}
            {stageTwoAlt3Details.name ? (
              <EvolutionMethod
                evolutionMethod={stageTwoAlt3EvolutionMethod}
              />
            ) : (
              <></>
            )}
            {stageTwoAlt4Details.name ? (
              <EvolutionMethod
                evolutionMethod={stageTwoAlt4EvolutionMethod}
              />
            ) : (
              <></>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {stageOneGen > genNum &&
            pokemonSpecies?.name !== stageThree?.name ? (
              <>
                <Link
                  to={`/${genPath}/${pokemonDetails.name}`}
                  state={pokemonDetails}
                >
                  <PokemonSprite
                    pokemonDetails={pokemonDetails}
                    path={location.pathname}
                    spriteVersion={spriteVersion}
                  />
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={`/${genPath}/${stageTwoDetails.name}`}
                  state={stageTwoDetails}
                >
                  <PokemonSprite
                    pokemonDetails={stageTwoDetails}
                    path={location.pathname}
                    spriteVersion={spriteVersion}
                  />
                </Link>
                <Link
                  to={`/${genPath}/${stageTwoAlt1Details.name}`}
                  state={stageTwoAlt1Details}
                >
                  <PokemonSprite
                    pokemonDetails={stageTwoAlt1Details}
                    path={location.pathname}
                    spriteVersion={spriteVersion}
                  />
                </Link>
                <Link
                  to={`/${genPath}/${stageTwoAlt2Details.name}`}
                  state={stageTwoAlt2Details}
                >
                  <PokemonSprite
                    pokemonDetails={stageTwoAlt2Details}
                    path={location.pathname}
                    spriteVersion={spriteVersion}
                  />
                </Link>
                <Link
                  to={`/${genPath}/${stageTwoAlt3Details.name}`}
                  state={stageTwoAlt3Details}
                >
                  <PokemonSprite
                    pokemonDetails={stageTwoAlt3Details}
                    path={location.pathname}
                    spriteVersion={spriteVersion}
                  />
                </Link>
                <Link
                  to={`/${genPath}/${stageTwoAlt4Details.name}`}
                  state={stageTwoAlt4Details}
                >
                  <PokemonSprite
                    pokemonDetails={stageTwoAlt4Details}
                    path={location.pathname}
                    spriteVersion={spriteVersion}
                  />
                </Link>
              </>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
      {stageThree && stageThreeGen <= genNum ? (
        <>
          <EvolutionMethod
            evolutionMethod={stageThreeEvolutionMethod}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Link
              to={`/${genPath}/${stageThreeDetails.name}`}
              state={stageThreeDetails}
            >
              <PokemonSprite
                pokemonDetails={stageThreeDetails}
                path={location.pathname}
                spriteVersion={spriteVersion}
              />
            </Link>
            <Link
              to={`/${genPath}/${stageThreeAltDetails.name}`}
              state={stageThreeAltDetails}
            >
              <PokemonSprite
                pokemonDetails={stageThreeAltDetails}
                path={location.pathname}
                spriteVersion={spriteVersion}
              />
            </Link>
            <Link
              to={`/${genPath}/${stageThreeAltStageTwoDetails.name}`}
              state={stageThreeAltStageTwoDetails}
            >
              <PokemonSprite
                pokemonDetails={stageThreeAltStageTwoDetails}
                path={location.pathname}
                spriteVersion={spriteVersion}
              />
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default PokemonEvolutionChain