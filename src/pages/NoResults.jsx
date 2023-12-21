// components
import FlexCenterWrapper from "../components/common/FlexCenterWrapper"
import HeaderWrapper from "../components/common/HeaderWrapper"

const NoResults = (props) => {
  const {
    search,
  } = props

  return (
    <>
      <HeaderWrapper>
        Results
      </HeaderWrapper>
      <FlexCenterWrapper
        additionalStyles={{
          flexDirection: 'column',
        }}
      >
        <HeaderWrapper
          otherVariant='h5'
        >
          No results found for '{search}'.
        </HeaderWrapper>
        <HeaderWrapper
          otherVariant='h6'
        >
          Try a different search.
        </HeaderWrapper>
      </FlexCenterWrapper>
    </>
  )
}

export default NoResults