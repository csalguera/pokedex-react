// npm modules
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import PokemonSprite from "./PokemonSprite";

// services
import { getPokemonDetails } from "../services/api-calls"

// utilities
import { pascalize } from "../utilities/pascalize";

const PokemonEvolutionChain = (props) => {
  const {
    stageOne,
    stageTwo,
    stageThree,
  } = props

  const [stageOneDetails, setStageOneDetails] = useState({})
  const [stageTwoDetails, setStageTwoDetails] = useState({})
  const [stageThreeDetails, setStageThreeDetails] = useState({})
  const location = useLocation()

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
    const fetchStageTwoDetails = async () => {
      if (stageTwo) {
        const stageTwoData = await getPokemonDetails(stageTwo.name)
        setStageTwoDetails(stageTwoData)
      }
    }
    fetchStageTwoDetails()
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

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      {stageOne ? (
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
          />
          <h2>{pascalize(stageOne.name) ?? ''}</h2>
        </div>
      ) : (
        <></>
      )}
      {stageTwo ? (
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
          />
          <h2>{pascalize(stageTwo.name) ?? ''}</h2>
        </div>
      ) : (
        <></>
      )}
      {stageThree ? (
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
          />
          <h2>{pascalize(stageThree.name) ?? ''}</h2>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default PokemonEvolutionChain