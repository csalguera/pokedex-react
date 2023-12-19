// mui components
import Typography from "@mui/material/Typography"

const ConditionText = (props) => {
  const {
    condition,
    color,
  } = props

  if (!condition) return
  return (
    <Typography
      sx={{
        my: 0,
        mx: 0.5,
        color: color,
      }}
    >
      {condition}
    </Typography>
  )
}

export default ConditionText