import HeaderWrapper from "./HeaderWrapper"
import FlexCenterWrapper from "./FlexCenterWrapper"
import ListItemTextWrapper from "./ListItemTextWrapper"

import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"


const PokemonListWrapper = ({ children, title }) => {
  return (
    <>
      <HeaderWrapper>
        {title}
      </HeaderWrapper>
      <FlexCenterWrapper>
        <List
          sx={{
            width: 1,
            maxWidth: 800,
          }}
        >
          <ListItem>
            <ListItemTextWrapper bold>National No.</ListItemTextWrapper>
            <ListItemTextWrapper bold>Name</ListItemTextWrapper>
            <ListItemTextWrapper bold>Type</ListItemTextWrapper>
          </ListItem>
          {children}
        </List>
      </FlexCenterWrapper>
    </>
  )
}

export default PokemonListWrapper