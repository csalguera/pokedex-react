// components
import LinkWrapper from "../common/LinkWrapper"

// mui components
import Button from "@mui/material/Button"

const SubmitBtn = (props) => {
  const {
    search,
  } = props

  return (
    <>
      <LinkWrapper
        to='/results'
        state={search}
        sx={{ color: 'background.default' }}
      >
        <Button
          sx={{ color: 'background.default' }}
        >
          Submit
        </Button>
      </LinkWrapper>
    </>
  )
}

export default SubmitBtn