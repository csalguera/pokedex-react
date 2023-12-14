// mui components
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const Landing = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 3
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: '600',
        }}
      >
        PokéDex
      </Typography>
    </Box>
  )
}

export default Landing