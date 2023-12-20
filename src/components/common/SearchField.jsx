// mui components
import { Search } from "@mui/icons-material"
import TextField from "@mui/material/TextField"

const SearchField = () => {
  return (
    <>
      <TextField
        sx={{
          input: { color: 'primary.dark' },
          backgroundColor: 'background.default',
          borderRadius: '100px',
          justifyContent: 'center',
          alignItems: 'center',
          "& fieldset": { border: 'none' },
          display: { xs: 'none', md: 'flex' }
        }}
        placeholder='Search...'
        autoComplete="off"
        size="small"
        InputProps={{
          startAdornment: <Search sx={{ color: 'primary.dark' }} />
        }}
      />
    </>
  )
}

export default SearchField