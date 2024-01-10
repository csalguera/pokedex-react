// npm modules
import { Link as RouterLink } from "react-router-dom"

// mui components
import { Link as MuiLink } from "@mui/material"

const LinkWrapper = ({ children, to, state, sx, variant }) => {
  return (
    <MuiLink
      component={RouterLink}
      to={to || '#'}
      state={state}
      sx={{
        textDecoration: 'none',
        ...sx
      }}
      variant={variant}
    >
      {children}
    </MuiLink>
  )
}

export default LinkWrapper