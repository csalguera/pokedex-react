// npm modules
import { useContext } from "react"

// components
import NationalNo from "./NationalNo"
import Name from "./Name"
import Classification from "./Classification"
import Type from "../Type/Type"
import AlternateForms from "./AlternateForms"
import Height from "./Height"
import Weight from "./Weight"
import Abilities from "../Abilities/Abilities"

// mui components
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const Info = () => {
  const { pokemonDetails } = useContext(PokemonDetailsContext)
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
      <ListItem>
        <ListItemText primary='Type' />
        <Type pokemonDetails={pokemonDetails} />
      </ListItem>
      <Divider />
      <AlternateForms />
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