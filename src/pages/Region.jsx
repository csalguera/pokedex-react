// npm modules
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

// components
import HeaderWrapper from "../components/common/HeaderWrapper"
import LinkWrapper from "../components/common/LinkWrapper"
import FlexCenterWrapper from "../components/common/FlexCenterWrapper"

// mui components
import { Typography } from "@mui/material"

// services
import { getPokemonList } from "../services/api-calls"

// utilities
import { pascalize, leadingZeros, validateSpecies } from "../utilities/utilities"

const Region = () => {
  const [region, setRegion] = useState([])
  const location = useLocation()
  const {
    regionName,
    dexOffset,
    dexLimit,
    genPath,
    genNum,
  } = location.state

  useEffect(() => {
    const fetchPokemonList = async () => {
      const pokemonData = await getPokemonList(dexLimit, dexOffset)
      setRegion(pokemonData.results)
    }
    fetchPokemonList()
  }, [dexLimit, dexOffset])

  return (
    <>
      <HeaderWrapper>
        {regionName}
      </HeaderWrapper>
      {region.length ? (
        region.map((pokemon, idx) => (
          <FlexCenterWrapper
            key={pokemon.name}
          >
            <FlexCenterWrapper
              additionalStyles={{
                justifyContent: 'flex-start',
                width: '175px',
              }}
            >
              <Typography
                sx={{
                  m: 1,
                }}
              >
                {leadingZeros(dexOffset + idx + 1)}
              </Typography>
              <LinkWrapper
                to={`/${genPath}/${pokemon.name}`}
                state={{ ...pokemon, genNum, genPath }}
                style={{
                  display: 'flex',
                  width: 'fit-content',
                }}
              >
                {pascalize(validateSpecies(pokemon.name))}
              </LinkWrapper>
            </FlexCenterWrapper>
          </FlexCenterWrapper>
        ))
      ) : (
        <HeaderWrapper
          otherVariant='h5'
        >
          Loading...
        </HeaderWrapper>
      )}
    </>
  )
}

export default Region