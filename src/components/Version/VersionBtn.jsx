// npm modules
import { useContext } from "react"

// mui components
import { Button } from "@mui/material"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const VersionBtn = (props) => {
  const {
    setSprite,
    versionVal,
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
    ((sprites.spriteGen1 === versionVal) && (actualPath === 'gen-i')) ||
    ((sprites.spriteGen2 === versionVal) && (actualPath === 'gen-ii')) ||
    ((sprites.spriteGen3 === versionVal) && (actualPath === 'gen-iii')) ||
    ((sprites.spriteGen4 === versionVal) && (actualPath === 'gen-iv')) ||
    ((sprites.spriteGen5 === versionVal) && (actualPath === 'gen-v'))
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