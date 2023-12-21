// components
import LinkWrapper from "../common/LinkWrapper"

// mui components
import Button from "@mui/material/Button"

const SubmitBtn = (props) => {
  const {
    search,
    clearSearch,
    invalidQuery,
  } = props

  return (
    <>
      <LinkWrapper
        to='/results'
        state={search}
        sx={{ color: 'background.default' }}
        style={{ pointerEvents: invalidQuery ? 'none' : 'auto' }}
      >
        <Button
          sx={{ color: 'background.default' }}
          onClick={clearSearch}
          disabled={invalidQuery ? true : false}
        >
          Submit
        </Button>
      </LinkWrapper>
    </>
  )
}

export default SubmitBtn