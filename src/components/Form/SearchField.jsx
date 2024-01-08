// npm modules
import { useNavigate } from "react-router-dom"

// mui components
import { Search } from "@mui/icons-material"
import TextField from "@mui/material/TextField"

const SearchField = (props) => {
  const {
    handleChange,
    search,
    clearSearch,
    invalidQuery
  } = props

  const navigate = useNavigate()

  function handleOnKeyDown(evt) {
    if (invalidQuery) return

    if (evt.key === 'Enter') {
      navigate('/results', { state: search })
      clearSearch()
    }
  }

  return (
    <>
      <TextField
        sx={{
          input: { color: 'primary.dark' },
          backgroundColor: 'background.search',
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
        name="search"
        value={search.search}
        onChange={handleChange}
        onKeyDown={handleOnKeyDown}
      />
    </>
  )
}

export default SearchField