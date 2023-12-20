// npm modules
import { useState } from "react"

// mui components
import { Search } from "@mui/icons-material"
import TextField from "@mui/material/TextField"

const SearchField = () => {
  const [search, setSearch] = useState({
    search: ''
  })

  function handleChange(evt) {
    setSearch({
      ...search,
      [evt.target.name]: evt.target.value
    })
  }

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
        required
        InputProps={{
          startAdornment: <Search sx={{ color: 'primary.dark' }} />
        }}
        name="search"
        value={search.name}
        onChange={handleChange}
      />
    </>
  )
}

export default SearchField