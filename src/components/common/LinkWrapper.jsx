// npm modules
import { Link as RouterLink } from "react-router-dom"

// mui components
import { Link as MuiLink } from "@mui/material"

const LinkWrapper = ({ children, to, state, sx }) => {
  return (
    <MuiLink
      component={RouterLink}
      to={to || '#'}
      state={state}
      sx={{
        textDecoration: 'none',
        ...sx
      }}
    >
      {children}
    </MuiLink>
  )
}

export default LinkWrapper