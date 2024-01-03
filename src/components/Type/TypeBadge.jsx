// mui components
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

// utilities
import { pascalize } from "../../utilities/utilities"

const TypeBadge = (props) => {
  const { type } = props

  let color = ''

  switch (type.name) {
    case 'normal':
      color = '#a8a878'
      break;
    case 'fighting':
      color = '#c03028'
      break;
    case 'flying':
      color = '#a98ff0'
      break;
    case 'poison':
      color = '#a040a0'
      break;
    case 'ground':
      color = '#e1c068'
      break;
    case 'rock':
      color = '#b8a038'
      break;
    case 'bug':
      color = '#a8b821'
      break;
    case 'ghost':
      color = '#705898'
      break;
    case 'steel':
      color = '#b7b8d0'
      break;
    case 'fire':
      color = '#f08031'
      break;
    case 'water':
      color = '#6890f0'
      break;
    case 'grass':
      color = '#77c850'
      break;
    case 'electric':
      color = '#f8d030'
      break;
    case 'psychic':
      color = '#f85788'
      break;
    case 'ice':
      color = '#98d8d8'
      break;
    case 'dragon':
      color = '#7038f8'
      break;
    case 'dark':
      color = '#705849'
      break;
    case 'fairy':
      color = '#ee99ac'
      break;
    default:
      color = '#67a090'
      break;
  }

  return (
    <Box
      style={{
        backgroundColor: color,
        color: 'white',
        textShadow: 'black 2px 2px 2px',
        width: '75px',
        textAlign: 'center',
        padding: '2px',
        margin: '2px',
        borderRadius: '100px'
      }}
    >
      <Typography>
        {pascalize(type.name) ?? ''}
      </Typography>
    </Box>
  )
}

export default TypeBadge