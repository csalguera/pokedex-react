// npm modules
import { useContext } from "react"

// components
import ImageWrapper from "../common/ImageWrapper"

// mui components
import Typography from "@mui/material/Typography"

// utilities
import { pascalize, determineCategory } from "../../utilities/utilities"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const DamageClass = (props) => {
  const {
    power,
    type,
    category,
    versionGroup,
  } = props

  const {
    currentGen,
    genPath,
    sprites,
  } = useContext(PokemonDetailsContext)

  const icon = `/assets/icons/${genPath}-${category}.png`
  const iconHGSS = `/assets/icons/${versionGroup}-${category}.png`
  const iconHGSSCondition = (sprites.spriteGen4 === 1 && currentGen === 4)

  return (
    <>
      {currentGen <= 3 && power ? (
        <Typography>
          {pascalize(determineCategory(type?.name ?? ''))}
        </Typography>
      ) : currentGen >= 4 ? (
        <ImageWrapper
          src={iconHGSSCondition ? iconHGSS : icon}
          width='50px'
          sx={{ display: 'flex' }}
        />
      ) : (
        <Typography>
          {pascalize(category ?? '')}
        </Typography>
      )}
    </>
  )
}

export default DamageClass