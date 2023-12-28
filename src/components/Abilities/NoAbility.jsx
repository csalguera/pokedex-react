// mui components
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"

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
        <ListItemText
          primary='No Abilities'
          primaryTypographyProps={{
            textAlign: 'center',
          }}
        />
      </ListItem>
      <Divider />
    </>
  )
}

export default NoAbility