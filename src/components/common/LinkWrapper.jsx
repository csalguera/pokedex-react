// npm modules
import { Link as RouterLink } from "react-router-dom"

// mui components
import { Link as MuiLink } from "@mui/material"

const LinkWrapper = ({ children, to, state, style }) => {
  return (
    <MuiLink
      component={RouterLink}
      to={to || '#'}
      state={state}
      style={{
        ...style
      }}
      sx={{
        textDecoration: 'none',
      }}
    >
      {children}
    </MuiLink>
  )
}

export default LinkWrapper