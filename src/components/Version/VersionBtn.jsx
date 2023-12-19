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
    spriteGen1,
    spriteGen2,
    spriteGen3,
    spriteGen4,
    spriteGen5,
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
    ((spriteGen1 === versionVal) && (actualPath === 'gen-i')) ||
    ((spriteGen2 === versionVal) && (actualPath === 'gen-ii')) ||
    ((spriteGen3 === versionVal) && (actualPath === 'gen-iii')) ||
    ((spriteGen4 === versionVal) && (actualPath === 'gen-iv')) ||
    ((spriteGen5 === versionVal) && (actualPath === 'gen-v'))
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