// npm modules
import { useContext } from "react"

// mui components
import { Button } from "@mui/material"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const VersionBtn = (props) => {
  const {
    setSprite,
    versionNum,
    chars,
    actualPath,
    thisPath,
  } = props

  const {
    sprites,
  } = useContext(PokemonDetailsContext)

  let display = ''

  switch (actualPath) {
    case thisPath:
      display = 'initial'
      break;
    default:
      display = 'none'
      break;
  }

  const activeVersion = (
    ((sprites.spriteGen1 === versionNum) && (actualPath === 'gen-i')) ||
    ((sprites.spriteGen2 === versionNum) && (actualPath === 'gen-ii')) ||
    ((sprites.spriteGen3 === versionNum) && (actualPath === 'gen-iii')) ||
    ((sprites.spriteGen4 === versionNum) && (actualPath === 'gen-iv')) ||
    ((sprites.spriteGen5 === versionNum) && (actualPath === 'gen-v'))
  )

  return (
    <Button
      sx={{
        display: display,
        margin: '8px',
      }}
      variant={activeVersion ? 'contained' : 'outlined'}
      onClick={() => setSprite()}
    >
      {chars}
    </Button>
  )
}

export default VersionBtn