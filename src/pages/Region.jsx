// npm modules
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

// components
import HeaderWrapper from "../components/common/HeaderWrapper"
import ListItemTextWrapper from "../components/common/ListItemTextWrapper"
import FlexCenterWrapper from "../components/common/FlexCenterWrapper"
import Loading from "../components/common/Loading"
import Entry from "../components/Region/Entry"

// mui components
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"

// services
import { getPokemonList } from "../services/api-calls"

const Region = () => {
  const [region, setRegion] = useState([])
  const location = useLocation()
  const {
    regionName,
    dexOffset,
    dexLimit,
  } = location.state

  useEffect(() => {
    const fetchPokemonList = async () => {
      const pokemonData = await getPokemonList(dexLimit, dexOffset)
      setRegion(pokemonData.results)
    }
    fetchPokemonList()
  }, [dexLimit, dexOffset])

  useEffect(() => {
    document.title = `PokéDex - ${regionName}`
  }, [regionName])

  if (!region.length) return <Loading />
  return (
    <>
      <HeaderWrapper>
        {regionName}
      </HeaderWrapper>
      <FlexCenterWrapper>
        <List
          sx={{
            width: 1,
            maxWidth: 800,
          }}
        >
          <ListItem>
            <ListItemTextWrapper bold>National No.</ListItemTextWrapper>
            <ListItemTextWrapper bold>Name</ListItemTextWrapper>
            <ListItemTextWrapper bold>Type</ListItemTextWrapper>
          </ListItem>
          {region.map((pokemon, idx) => (
            <Entry
              key={pokemon.name}
              pokemon={pokemon}
              idx={idx}
              location={location}
              genPath={location.state.genPath}
              genNum={location.state.genNum}
            />
          ))}
        </List>
      </FlexCenterWrapper>
    </>
  )
}

export default Region