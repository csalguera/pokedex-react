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
  const [stageTwoAlt1Species, setStageTwoAlt1Species] = useState({})
  const [stageTwoAlt2Details, setStageTwoAlt2Details] = useState({})
  const [stageTwoAlt2Species, setStageTwoAlt2Species] = useState({})
  const [stageTwoAlt3Details, setStageTwoAlt3Details] = useState({})
  const [stageTwoAlt3Species, setStageTwoAlt3Species] = useState({})
  const [stageTwoAlt4Details, setStageTwoAlt4Details] = useState({})
  const [stageTwoAlt4Species, setStageTwoAlt4Species] = useState({})
  const [stageThreeDetails, setStageThreeDetails] = useState({})
  const [stageThreeSpecies, setStageThreeSpecies] = useState({})
  const [stageThreeAltDetails, setStageThreeAltDetails] = useState({})
  const [stageThreeAltSpecies, setStageThreeAltSpecies] = useState({})
  const [stageThreeAltStageTwoDetails, setStageThreeAltStageTwoDetails] = useState({})
  const [stageThreeAltStageTwoSpecies, setStageThreeAltStageTwoSpecies] = useState({})
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
  const stageThreeAltEvolutionMethod = stageThreeAlt?.evolution_details[0]
  const stageThreeAltStageTwoEvolutionMethod = stageThreeAltStageTwo?.evolution_details[0]

  const stageOneGen = (parseInt(stageOneSpecies.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))
  const stageTwoGen = (parseInt(stageTwoSpecies.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))
  const stageTwoAlt1Gen = (parseInt(stageTwoAlt1Species.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))
  const stageTwoAlt2Gen = (parseInt(stageTwoAlt2Species.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))
  const stageTwoAlt3Gen = (parseInt(stageTwoAlt3Species.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))
  const stageTwoAlt4Gen = (parseInt(stageTwoAlt4Species.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))
  const stageThreeGen = (parseInt(stageThreeSpecies.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))
  const stageThreeAltGen = (parseInt(stageThreeAltSpecies.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))
  const stageThreeAltStageTwoGen = (parseInt(stageThreeAltStageTwoSpecies.generation?.url.replace('https://pokeapi.co/api/v2/generation/', '').replace('/', '')))

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
    const fetchStageOneData = async () => {
      if (stageOne?.species) {
        const stageOneDetailsData = await getPokemonDetails(stageOne?.species.name)
        setStageOneDetails(stageOneDetailsData)
        const stageOneSpeciesData = await getPokemonSpecies(stageOne?.species.name)
        setStageOneSpecies(stageOneSpeciesData)
      }
    }
    fetchStageOneData()
  }, [stageOne])

  useEffect(() => {
    const fetchStageTwoData = async () => {
      if (stageTwo?.species) {
        const stageTwoDetailsData = await getPokemonDetails(stageTwo?.species.name)
        setStageTwoDetails(stageTwoDetailsData)
        const stageTwoSpeciesData = await getPokemonSpecies(stageTwo?.species.name)
        setStageTwoSpecies(stageTwoSpeciesData)
      }
    }
    fetchStageTwoData()
  }, [stageTwo])

  useEffect(() => {
    const fetchStageTwoAlt1Data = async () => {
      if (stageTwoAlt1?.species) {
        const stageTwoAlt1DetailsData = await getPokemonDetails(stageTwoAlt1?.species.name)
        setStageTwoAlt1Details(stageTwoAlt1DetailsData)
        const stageTwoAlt1SpeciesData = await getPokemonSpecies(stageTwoAlt1?.species.name)
        setStageTwoAlt1Species(stageTwoAlt1SpeciesData)
      }
    }
    fetchStageTwoAlt1Data()
  }, [stageTwoAlt1])

  useEffect(() => {
    const fetchStageTwoAlt2Data = async () => {
      if (stageTwoAlt2?.species) {
        const stageTwoAlt2DetailsData = await getPokemonDetails(stageTwoAlt2?.species.name)
        setStageTwoAlt2Details(stageTwoAlt2DetailsData)
        const stageTwoAlt2SpeciesData = await getPokemonSpecies(stageTwoAlt2?.species.name)
        setStageTwoAlt2Species(stageTwoAlt2SpeciesData)
      }
    }
    fetchStageTwoAlt2Data()
  }, [stageTwoAlt2])

  useEffect(() => {
    const fetchStageTwoAlt3Data = async () => {
      if (stageTwoAlt3?.species) {
        const stageTwoAlt3DetailsData = await getPokemonDetails(stageTwoAlt3?.species.name)
        setStageTwoAlt3Details(stageTwoAlt3DetailsData)
        const stageTwoAlt3SpeciesData = await getPokemonSpecies(stageTwoAlt3?.species.name)
        setStageTwoAlt3Species(stageTwoAlt3SpeciesData)
      }
    }
    fetchStageTwoAlt3Data()
  }, [stageTwoAlt3])

  useEffect(() => {
    const fetchStageTwoAlt4Data = async () => {
      if (stageTwoAlt4?.species) {
        const stageTwoAlt4DetailsData = await getPokemonDetails(stageTwoAlt4?.species.name)
        setStageTwoAlt4Details(stageTwoAlt4DetailsData)
        const stageTwoAlt4SpeciesData = await getPokemonSpecies(stageTwoAlt4?.species.name)
        setStageTwoAlt4Species(stageTwoAlt4SpeciesData)
      }
    }
    fetchStageTwoAlt4Data()
  }, [stageTwoAlt4])

  useEffect(() => {
    const fetchStageThreeData = async () => {
      if (stageThree?.species) {
        const stageThreeDetailsData = await getPokemonDetails(stageThree?.species.name)
        setStageThreeDetails(stageThreeDetailsData)
        const stageThreeSpeciesData = await getPokemonSpecies(stageThree?.species.name)
        setStageThreeSpecies(stageThreeSpeciesData)
      }
    }
    fetchStageThreeData()
  }, [stageThree])

  useEffect(() => {
    const fetchStageThreeAltData = async () => {
      if (stageThreeAlt?.species) {
        const stageThreeAltDetailsData = await getPokemonDetails(stageThreeAlt?.species.name)
        setStageThreeAltDetails(stageThreeAltDetailsData)
        const stageThreeAltSpeciesData = await getPokemonSpecies(stageThreeAlt?.species.name)
        setStageThreeAltSpecies(stageThreeAltSpeciesData)
      }
    }
    fetchStageThreeAltData()
  }, [stageThreeAlt])

  useEffect(() => {
    const fetchStageThreeAltStageTwoData = async () => {
      if (stageThreeAltStageTwo?.species) {
        const stageThreeAltStageTwoDetailsData = await getPokemonDetails(stageThreeAltStageTwo?.species.name)
        setStageThreeAltStageTwoDetails(stageThreeAltStageTwoDetailsData)
        const stageThreeAltStageTwoSpeciesData = await getPokemonSpecies(stageThreeAltStageTwo?.species.name)
        setStageThreeAltStageTwoSpecies(stageThreeAltStageTwoSpeciesData)
      }
    }
    fetchStageThreeAltStageTwoData()
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
          {stageOne && stageOneGen <= genNum ? (
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
              {stageTwoAlt1Details.name && stageTwoAlt1Gen <= genNum ? (
                <EvolutionMethod
                  evolutionMethod={stageTwoAlt1EvolutionMethod}
                />
              ) : (
                <></>
              )}
              {stageTwoAlt2Details.name && stageTwoAlt2Gen <= genNum ? (
                <EvolutionMethod
                  evolutionMethod={stageTwoAlt2EvolutionMethod}
                />
              ) : (
                <></>
              )}
              {stageTwoAlt3Details.name && stageTwoAlt3Gen <= genNum ? (
                <EvolutionMethod
                  evolutionMethod={stageTwoAlt3EvolutionMethod}
                />
              ) : (
                <></>
              )}
              {stageTwoAlt4Details.name && stageTwoAlt4Gen <= genNum ? (
                <EvolutionMethod
                  evolutionMethod={stageTwoAlt4EvolutionMethod}
                />
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}
          >
            <EvolutionMethod
              evolutionMethod={stageThreeEvolutionMethod}
            />
            {stageThreeAltDetails.name && stageThreeAltGen <= genNum ? (
              <EvolutionMethod
                evolutionMethod={stageThreeAltEvolutionMethod}
              />
            ) : (
              <></>
            )}
            {stageThreeAltStageTwoDetails.name && stageThreeAltStageTwoGen <= genNum ? (
              <EvolutionMethod
                evolutionMethod={stageThreeAltStageTwoEvolutionMethod}
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