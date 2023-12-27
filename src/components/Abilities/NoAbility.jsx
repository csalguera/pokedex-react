// mui components
import Typography from "@mui/material/Typography"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"

const NoAbility = () => {
  return (
    <ListItem>
      <ListItemText primary='Abilities:' />
      <Typography>No Abilities</Typography>
    </ListItem>
  )
}

export default NoAbility