// components
import NationalNo from "./NationalNo"
import Name from "./Name"
import Classification from "../Classification/Classification"
import Type from "../Type/Type"
import Height from "./Height"
import Weight from "./Weight"
import Abilities from "../Abilities/Abilities"

// mui components
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"

const Info = () => {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        height: '488px',
      }}
    >
      <NationalNo />
      <Divider />
      <Name />
      <Divider />
      <Classification />
      <Divider />
      <Type />
      <Divider />
      <Height />
      <Divider />
      <Weight />
      <Divider />
      <Abilities />
    </List>
  )
}

export default Info