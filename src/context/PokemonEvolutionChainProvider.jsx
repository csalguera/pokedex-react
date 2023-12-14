// npm modules
import { createContext, useContext, useState, useEffect } from "react";

// services
import { getPokemonDetails, getPokemonSpecies } from "../services/api-calls"

// context
import { PokemonDetailsContext } from "./PokemonDetailsProvider";
export const PokemonEvolutionChainContext = createContext()

const PokemonEvolutionChainProvider = ({ children }) => {
  const { evolutionChain } = useContext(PokemonDetailsContext)
  // stage one
  const [stageOneDetails, setStageOneDetails] = useState({})
  const [stageOneSpecies, setStageOneSpecies] = useState({})
  const [stageOneGen, setStageOneGen] = useState(0)
  // stage two
  const [stageTwoDetails, setStageTwoDetails] = useState({})
  const [stageTwoSpecies, setStageTwoSpecies] = useState({})
  const [stageTwoGen, setStageTwoGen] = useState(0)
  // stage two alt 1
  const [stageTwoAlt1Details, setStageTwoAlt1Details] = useState({})
  const [stageTwoAlt1Species, setStageTwoAlt1Species] = useState({})
  const [stageTwoAlt1Gen, setStageTwoAlt1Gen] = useState(0)
  // stage two alt 2
  const [stageTwoAlt2Details, setStageTwoAlt2Details] = useState({})
  const [stageTwoAlt2Species, setStageTwoAlt2Species] = useState({})
  const [stageTwoAlt2Gen, setStageTwoAlt2Gen] = useState(0)
  // stage two alt 3
  const [stageTwoAlt3Details, setStageTwoAlt3Details] = useState({})
  const [stageTwoAlt3Species, setStageTwoAlt3Species] = useState({})
  const [stageTwoAlt3Gen, setStageTwoAlt3Gen] = useState(0)
  // stage two alt 4
  const [stageTwoAlt4Details, setStageTwoAlt4Details] = useState({})
  const [stageTwoAlt4Species, setStageTwoAlt4Species] = useState({})
  const [stageTwoAlt4Gen, setStageTwoAlt4Gen] = useState(0)
  // stage two alt 5
  const [stageTwoAlt5Details, setStageTwoAlt5Details] = useState({})
  const [stageTwoAlt5Species, setStageTwoAlt5Species] = useState({})
  const [stageTwoAlt5Gen, setStageTwoAlt5Gen] = useState(0)
  // stage two alt 6
  const [stageTwoAlt6Details, setStageTwoAlt6Details] = useState({})
  const [stageTwoAlt6Species, setStageTwoAlt6Species] = useState({})
  const [stageTwoAlt6Gen, setStageTwoAlt6Gen] = useState(0)
  // stage three
  const [stageThreeDetails, setStageThreeDetails] = useState({})
  const [stageThreeSpecies, setStageThreeSpecies] = useState({})
  const [stageThreeGen, setStageThreeGen] = useState(0)
  // stage three alt
  const [stageThreeAltDetails, setStageThreeAltDetails] = useState({})
  const [stageThreeAltSpecies, setStageThreeAltSpecies] = useState({})
  const [stageThreeAltGen, setStageThreeAltGen] = useState(0)
  // stage three alt stage two
  const [stageThreeAltStageTwoDetails, setStageThreeAltStageTwoDetails] = useState({})
  const [stageThreeAltStageTwoSpecies, setStageThreeAltStageTwoSpecies] = useState({})
  const [stageThreeAltStageTwoGen, setStageThreeAltStageTwoGen] = useState(0)

  const stageOne = (evolutionChain.chain)
  const stageTwo = (evolutionChain.chain?.evolves_to[0])
  const stageTwoAlt1 = (evolutionChain.chain?.evolves_to[1])
  const stageTwoAlt2 = (evolutionChain.chain?.evolves_to[2])
  const stageTwoAlt3 = (evolutionChain.chain?.evolves_to[3])
  const stageTwoAlt4 = (evolutionChain.chain?.evolves_to[4])
  const stageTwoAlt5 = (evolutionChain.chain?.evolves_to[5])
  const stageTwoAlt6 = (evolutionChain.chain?.evolves_to[6])
  const stageThree = (evolutionChain.chain?.evolves_to[0]?.evolves_to[0])
  const stageThreeAlt = (evolutionChain.chain?.evolves_to[0]?.evolves_to[1])
  const stageThreeAltStageTwo = (evolutionChain.chain?.evolves_to[1]?.evolves_to[0])

  const stageTwoEvolutionMethod = stageTwo?.evolution_details[0]
  const stageTwoAlt1EvolutionMethod = stageTwoAlt1?.evolution_details[0]
  const stageTwoAlt2EvolutionMethod = stageTwoAlt2?.evolution_details[0]
  const stageTwoAlt3EvolutionMethod = stageTwoAlt3?.evolution_details[0]
  const stageTwoAlt4EvolutionMethod = stageTwoAlt4?.evolution_details[0]
  const stageTwoAlt5EvolutionMethod = stageTwoAlt5?.evolution_details[0]
  const stageTwoAlt6EvolutionMethod = stageTwoAlt6?.evolution_details[0]
  const stageThreeEvolutionMethod = stageThree?.evolution_details[0]
  const stageThreeAltEvolutionMethod = stageThreeAlt?.evolution_details[0]
  const stageThreeAltStageTwoEvolutionMethod = stageThreeAltStageTwo?.evolution_details[0]

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
    const fetchStageTwoAlt5Data = async () => {
      if (stageTwoAlt5?.species) {
        const stageTwoAlt5DetailsData = await getPokemonDetails(stageTwoAlt5?.species.name)
        setStageTwoAlt5Details(stageTwoAlt5DetailsData)
        const stageTwoAlt5SpeciesData = await getPokemonSpecies(stageTwoAlt5?.species.name)
        setStageTwoAlt5Species(stageTwoAlt5SpeciesData)
      }
    }
    fetchStageTwoAlt5Data()
  }, [stageTwoAlt5])

  useEffect(() => {
    const fetchStageTwoAlt6Data = async () => {
      if (stageTwoAlt6?.species) {
        const stageTwoAlt6DetailsData = await getPokemonDetails(stageTwoAlt6?.species.name)
        setStageTwoAlt6Details(stageTwoAlt6DetailsData)
        const stageTwoAlt6SpeciesData = await getPokemonSpecies(stageTwoAlt6?.species.name)
        setStageTwoAlt6Species(stageTwoAlt6SpeciesData)
      }
    }
    fetchStageTwoAlt6Data()
  }, [stageTwoAlt6])

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

  useEffect(() => {
    const extractGenNum = (obj) => {
      const url = process.env.REACT_APP_API_BASE_URL
      return parseInt(obj?.generation?.url.replace(`${url}/generation`, '').replace('/', ''))
    }
    setStageOneGen(extractGenNum(stageOneSpecies))
    setStageTwoGen(extractGenNum(stageTwoSpecies))
    setStageTwoAlt1Gen(extractGenNum(stageTwoAlt1Species))
    setStageTwoAlt2Gen(extractGenNum(stageTwoAlt2Species))
    setStageTwoAlt3Gen(extractGenNum(stageTwoAlt3Species))
    setStageTwoAlt4Gen(extractGenNum(stageTwoAlt4Species))
    setStageTwoAlt5Gen(extractGenNum(stageTwoAlt5Species))
    setStageTwoAlt6Gen(extractGenNum(stageTwoAlt6Species))
    setStageThreeGen(extractGenNum(stageThreeSpecies))
    setStageThreeAltGen(extractGenNum(stageThreeAltSpecies))
    setStageThreeAltStageTwoGen(extractGenNum(stageThreeAltStageTwoSpecies))
  }, [
    stageOneSpecies,
    stageTwoSpecies,
    stageThreeSpecies,
    stageTwoAlt1Species,
    stageTwoAlt2Species,
    stageTwoAlt3Species,
    stageTwoAlt4Species,
    stageTwoAlt5Species,
    stageTwoAlt6Species,
    stageThreeAltSpecies,
    stageThreeAltStageTwoSpecies,
  ])

  const contextValues = {
    stageOne,
    stageOneDetails,
    stageOneGen,
    stageTwo,
    stageTwoGen,
    stageTwoDetails,
    stageTwoEvolutionMethod,
    stageTwoAlt1Gen,
    stageTwoAlt1Details,
    stageTwoAlt1EvolutionMethod,
    stageTwoAlt2Gen,
    stageTwoAlt2Details,
    stageTwoAlt2EvolutionMethod,
    stageTwoAlt3Gen,
    stageTwoAlt3Details,
    stageTwoAlt3EvolutionMethod,
    stageTwoAlt4Gen,
    stageTwoAlt4Details,
    stageTwoAlt4EvolutionMethod,
    stageTwoAlt5Gen,
    stageTwoAlt5Details,
    stageTwoAlt5EvolutionMethod,
    stageTwoAlt6Gen,
    stageTwoAlt6Details,
    stageTwoAlt6EvolutionMethod,
    stageThree,
    stageThreeGen,
    stageThreeDetails,
    stageThreeEvolutionMethod,
    stageThreeAltGen,
    stageThreeAltDetails,
    stageThreeAltEvolutionMethod,
    stageThreeAltStageTwoGen,
    stageThreeAltStageTwoDetails,
    stageThreeAltStageTwoEvolutionMethod,
  }

  return (
    <PokemonEvolutionChainContext.Provider
      value={contextValues}
    >
      {children}
    </PokemonEvolutionChainContext.Provider>
  )
}

export default PokemonEvolutionChainProvider