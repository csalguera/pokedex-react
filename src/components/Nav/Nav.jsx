// npm modules
import { Link } from "react-router-dom"
import { useState } from "react"

// mui components
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import ComputerIcon from '@mui/icons-material/Computer'

const Nav = () => {
  const gen1 = {
    regionName: 'Kanto',
    dexOffset: 0,
    dexLimit: 151,
    genPath: 'gen-i',
    genNum: 1,
  }

  const gen2 = {
    regionName: 'Johto',
    dexOffset: 151,
    dexLimit: 100,
    genPath: 'gen-ii',
    genNum: 2,
  }

  const gen3 = {
    regionName: 'Hoenn',
    dexOffset: 251,
    dexLimit: 135,
    genPath: 'gen-iii',
    genNum: 3,
  }

  const gen4 = {
    regionName: 'Sinnoh',
    dexOffset: 386,
    dexLimit: 107,
    genPath: 'gen-iv',
    genNum: 4,
  }

  const pages = [
    gen1,
    gen2,
    gen3,
    gen4,
  ]

  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ComputerIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            POKÉDEX
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.genPath} onClick={handleCloseNavMenu}>
                  <Link
                    to={page.genPath}
                    state={page}
                    style={{
                      textDecoration: 'none',
                      color: 'initial',
                    }}
                  >
                    {page.regionName}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ComputerIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            POKÉDEX
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link
                key={page.genPath}
                to={page.genPath}
                state={page}
                style={{
                  textDecoration: 'none'
                }}
              >
                <Button
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                  }}
                >
                  {page.regionName}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Nav