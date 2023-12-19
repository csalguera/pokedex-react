// mui components
import Typography from "@mui/material/Typography"

const ConditionText = (props) => {
  const {
    condition,
    color,
  } = props

  return (
    <>
      {condition ? (
        <Typography
          sx={{
            my: 0,
            mx: 0.5,
            color: color,
          }}
        >
          {condition}
        </Typography>
      ) : (
        null
      )}
    </>
  )
}

export default ConditionText