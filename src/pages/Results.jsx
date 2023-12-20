// npm modules
import { useEffect, useState } from "react"

// components
import HeaderWrapper from "../components/common/HeaderWrapper"
import LinkWrapper from "../components/common/LinkWrapper"
import Loading from "../components/common/Loading"

// services
import { getPokemonList } from "../services/api-calls"

// utilities
import { determineLimit, pascalize, validateSpecies, pathForResults, numForResults } from "../utilities/utilities"

// other
import { pages } from "../components/Nav/Nav"
import FlexCenterWrapper from "../components/common/FlexCenterWrapper"

const Results = () => {
  const [results, setResults] = useState([])
  const dexLimit = determineLimit(pages)
  const genPath = pathForResults(pages.length)

  useEffect(() => {
    const fetchResults = async () => {
      const resultData = await getPokemonList(dexLimit, 0)
      setResults(resultData)
    }
    fetchResults()
  }, [dexLimit])

  if (!results?.results?.length) return <Loading />
  return (
    <>
      <HeaderWrapper>
        Results
      </HeaderWrapper>
      {results.results.map((result, idx) => (
        <FlexCenterWrapper key={result.name}>
          <FlexCenterWrapper
            additionalStyles={{
              justifyContent: 'flex-start',
              wdith: '175px'
            }}
          >
            <LinkWrapper
              to={`/${genPath}/${result.name}`}
              state={{ ...result, genNum: numForResults(idx + 1), genPath }}
              style={{
                display: 'flex',
                width: 'fit-content',
              }}
            >
              {pascalize(validateSpecies(result?.name))}
            </LinkWrapper>
          </FlexCenterWrapper>
        </FlexCenterWrapper>
      ))}
    </>
  )
}

export default Results