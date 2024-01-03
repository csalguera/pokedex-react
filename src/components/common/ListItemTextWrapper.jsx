// components
import FlexCenterWrapper from "./FlexCenterWrapper"

// mui components
import ListItemText from "@mui/material/ListItemText"

const ListItemTextWrapper = ({ children, bold, color }) => {
  return (
    <FlexCenterWrapper
      additionalStyles={{
        width: 1
      }}
    >
      <ListItemText
        primary={children}
        primaryTypographyProps={{
          fontWeight: bold ? 600 : undefined,
          color: color,
        }}
      />
    </FlexCenterWrapper>
  )
}

export default ListItemTextWrapper