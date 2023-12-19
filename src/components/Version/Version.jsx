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
    setSpriteGen1,
    setSpriteGen2,
    setSpriteGen3,
    setSpriteGen4,
  } = useContext(PokemonDetailsContext)

  const versions = [
    { val: 0, thisPath: 'gen-i', chars: 'RB', setSprite: setSpriteGen1 },
    { val: 1, thisPath: 'gen-i', chars: 'Y', setSprite: setSpriteGen1 },
    { val: 0, thisPath: 'gen-ii', chars: 'G', setSprite: setSpriteGen2 },
    { val: 1, thisPath: 'gen-ii', chars: 'S', setSprite: setSpriteGen2 },
    { val: 2, thisPath: 'gen-ii', chars: 'C', setSprite: setSpriteGen2 },
    { val: 0, thisPath: 'gen-iii', chars: 'RS', setSprite: setSpriteGen3 },
    { val: 1, thisPath: 'gen-iii', chars: 'FRLG', setSprite: setSpriteGen3 },
    { val: 2, thisPath: 'gen-iii', chars: 'E', setSprite: setSpriteGen3 },
    { val: 0, thisPath: 'gen-iv', chars: 'DP', setSprite: setSpriteGen4 },
    { val: 1, thisPath: 'gen-iv', chars: 'HGSS', setSprite: setSpriteGen4 },
    { val: 2, thisPath: 'gen-iv', chars: 'Pt', setSprite: setSpriteGen4 },
  ]

  return (
    <FlexCenterWrapper>
      {versions.map(version => (
        <VersionBtn
          key={`${version.thisPath}-${version.val}`}
          setSprite={() => version.setSprite(version.val)}
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