// npm modules
import { useState } from "react"

// components
import LinkWrapper from "../common/LinkWrapper"
import ImageMd from "../common/ImageMd"
import Form from "../Form/Form"

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
import ImageXs from "../common/ImageXs"

export const pages = [
  { regionName: 'Kanto', dexOffset: 0, dexLimit: 151, genPath: 'gen-i', genNum: 1 },
  { regionName: 'Johto', dexOffset: 151, dexLimit: 100, genPath: 'gen-ii', genNum: 2 },
  { regionName: 'Hoenn', dexOffset: 251, dexLimit: 135, genPath: 'gen-iii', genNum: 3 },
  { regionName: 'Sinnoh', dexOffset: 386, dexLimit: 107, genPath: 'gen-iv', genNum: 4 },
  { regionName: 'Unova', dexOffset: 493, dexLimit: 156, genPath: 'gen-v', genNum: 5 },
]

const Nav = () => {

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
          <ImageMd
            src="/pokeball-icon.png"
            width='30px'
          />
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
                  <LinkWrapper
                    to={page.genPath}
                    state={page}
                  >
                    {page.regionName}
                  </LinkWrapper>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ImageXs
            src="/pokeball-icon.png"
            width='30px'
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
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
              <LinkWrapper
                key={page.genPath}
                to={page.genPath}
                state={page}
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
              </LinkWrapper>
            ))}
          </Box>
          <Form />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Nav