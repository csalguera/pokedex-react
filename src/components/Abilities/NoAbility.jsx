// mui components
import Typography from "@mui/material/Typography"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

const NoAbility = () => {
  return (
    <>
      <ListItem
          sx={{
            width: '100%',
          }}
        >
          <ListItemText
            primary='Abilities'
            primaryTypographyProps={{
              fontWeight: 600,
              textAlign: 'center',
            }}
          />
        </ListItem>
      <ListItem>
        <Typography
          sx={{
            width: '100%',
            textAlign: 'center',
          }}
        >
          No Abilities
        </Typography>
      </ListItem>
    </>
  )
}

export default NoAbility