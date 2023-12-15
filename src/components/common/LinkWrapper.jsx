// npm modules
import { Link as RouterLink } from "react-router-dom"

// mui components
import { Link as MuiLink } from "@mui/material"

const LinkWrapper = ({ children, to, state }) => {
  return (
    <MuiLink
      component={RouterLink}
      to={to || '#'}
      state={state}
      sx={{
        textDecoration: 'none',
      }}
    >
      {children}
    </MuiLink>
  )
}

export default LinkWrapper