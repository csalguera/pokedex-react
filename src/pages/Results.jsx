// npm modules
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

// components
import PokemonListWrapper from "../components/common/PokemonListWrapper"
import Loading from "../components/common/Loading"
import NoResults from "./NoResults"
import Entry from "../components/common/Entry"

// services
import { getPokemonList } from "../services/api-calls"

// utilities
import { determineLimit, pathForResults, numForResults, retrieveId } from "../utilities/utilities"
import { pages } from "../utilities/data"

const Results = () => {
  const location = useLocation()
  const [results, setResults] = useState([])
  const dexLimit = determineLimit(pages)
  const genPath = pathForResults(pages.length)
  const search = location.state.search

  useEffect(() => {
    const fetchResults = async () => {
      const resultData = await getPokemonList(dexLimit, 0)
      setResults(resultData)
    }
    fetchResults()
  }, [dexLimit])

  useEffect(() => {
    document.title = `PokéDex - Results`
  }, [])

  const filteredResults = results?.results?.filter(result => result.name.includes(search))

  if (!results?.results?.length) return <Loading />
  if (!filteredResults.length) return <NoResults search={search} />
  return (
    <PokemonListWrapper
      title='Results'
    >
      {filteredResults?.map(result => (
        <Entry
          key={result.name}
          pokemon={result}
          resultId={retrieveId(result)}
          location={location}
          genPath={genPath}
          genNum={numForResults(result)}
        />
      ))}
    </PokemonListWrapper>
  )
}

export default Results