// npm modules
import { useEffect, useState } from "react"

// components
import HeaderWrapper from "../components/common/HeaderWrapper"

// services
import { getPokemonList } from "../services/api-calls"

// utilities
import { determineLimit } from "../utilities/utilities"

// other
import { pages } from "../components/Nav/Nav"

const Results = () => {
  const [results, setResults] = useState({})

  useEffect(() => {
    const fetchResults = async () => {
      const resultData = await getPokemonList(determineLimit(pages), 0)
      setResults(resultData)
    }
    fetchResults()
  }, [])

  return (
    <>
      <HeaderWrapper>
        Results
      </HeaderWrapper>
    </>
  )
}

export default Results