// npm modules
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

// components
import HeaderWrapper from "../components/common/HeaderWrapper"
import FlexCenterWrapper from "../components/common/FlexCenterWrapper"
import ListItemTextWrapper from "../components/common/ListItemTextWrapper"
import Loading from "../components/common/Loading"
import NoResults from "./NoResults"
import Entry from "../components/Region/Entry"

// mui components
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"

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
    <>
      <HeaderWrapper>
        Results
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
        </List>
      </FlexCenterWrapper>
    </>
  )
}

export default Results