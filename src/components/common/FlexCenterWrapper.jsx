// mui components
import Box from "@mui/material/Box";

const FlexCenterWrapper = ({ children, additionalStyles = {} }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...additionalStyles,
      }}
    >
      {children}
    </Box>
  )
}

export default FlexCenterWrapper