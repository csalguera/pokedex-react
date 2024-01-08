// npm modules
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

// components
import HeaderWrapper from "../components/common/HeaderWrapper"
import Loading from "../components/common/Loading"
import Entry from "../components/Region/Entry"

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
      {region.map((pokemon, idx) => (
        <Entry
          key={pokemon.name}
          pokemon={pokemon}
          idx={idx}
          location={location}
        />
      ))}
    </>
  )
}

export default Region