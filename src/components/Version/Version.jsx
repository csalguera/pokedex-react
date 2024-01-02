// npm modules
import { useContext } from "react"

// components
import VersionBtn from "./VersionBtn"
import FlexCenterWrapper from "../common/FlexCenterWrapper"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const Version = () => {
  const {
    genPath,
    updateSprites,
  } = useContext(PokemonDetailsContext)

  const versions = [
    { val: 0, thisPath: 'gen-i', chars: 'RB', setSprite: 'spriteGen1' },
    { val: 1, thisPath: 'gen-i', chars: 'Y', setSprite: 'spriteGen1' },
    { val: 0, thisPath: 'gen-ii', chars: 'G', setSprite: 'spriteGen2' },
    { val: 1, thisPath: 'gen-ii', chars: 'S', setSprite: 'spriteGen2' },
    { val: 2, thisPath: 'gen-ii', chars: 'C', setSprite: 'spriteGen2' },
    { val: 0, thisPath: 'gen-iii', chars: 'RS', setSprite: 'spriteGen3' },
    { val: 1, thisPath: 'gen-iii', chars: 'FRLG', setSprite: 'spriteGen3' },
    { val: 2, thisPath: 'gen-iii', chars: 'E', setSprite: 'spriteGen3' },
    { val: 0, thisPath: 'gen-iv', chars: 'DP', setSprite: 'spriteGen4' },
    { val: 1, thisPath: 'gen-iv', chars: 'HGSS', setSprite: 'spriteGen4' },
    { val: 2, thisPath: 'gen-iv', chars: 'Pt', setSprite: 'spriteGen4' },
    { val: 0, thisPath: 'gen-v', chars: 'BW / B2W2', setSprite: 'spriteGen5' },
  ]

  return (
    <FlexCenterWrapper>
      {versions.map(version => (
        <VersionBtn
          key={`${version.thisPath}-${version.val}`}
          setSprite={() => updateSprites(version.setSprite, version.val)}
          versionVal={version.val}
          chars={version.chars}
          actualPath={genPath}
          thisPath={version.thisPath}
        />
      ))}
    </FlexCenterWrapper>
  )
}

export default Version