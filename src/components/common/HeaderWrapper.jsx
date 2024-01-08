// mui components
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const HeaderWrapper = ({ children, otherVariant, color }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        my: 3,
        mx: 1,
      }}
    >
      <Typography
        variant={otherVariant ?? 'h4'}
        sx={{
          fontWeight: '600',
          color,
        }}
      >
        {children}
      </Typography>
    </Box>
  )
}

export default HeaderWrapper