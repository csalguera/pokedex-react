// mui components
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const HeaderWrapper = ({ children, otherVariant }) => {
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
        }}
      >
        {children}
      </Typography>
    </Box>
  )
}

export default HeaderWrapper