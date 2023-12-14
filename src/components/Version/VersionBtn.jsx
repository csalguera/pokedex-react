// npm modules
import { Button } from "@mui/material"

import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"
import { useContext } from "react"

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
    ((spriteGen4 === versionVal) && (actualPath === 'gen-iv'))
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