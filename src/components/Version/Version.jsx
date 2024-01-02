// npm modules
import { useContext } from "react"

// components
import VersionBtn from "./VersionBtn"
import FlexCenterWrapper from "../common/FlexCenterWrapper"

// utilities
import { versions } from "../../utilities/data"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const Version = () => {
  const {
    genPath,
    updateSprites,
  } = useContext(PokemonDetailsContext)

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