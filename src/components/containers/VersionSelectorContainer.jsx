// npm modules
import { useContext } from "react"

// components
import VersionSelector from "../buttons/VersionSelector"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const VersionSelectorContainer = () => {
  const {
    genPath,
    setSpriteGen1,
    setSpriteGen2,
    setSpriteGen3,
    setSpriteGen4,
  } = useContext(PokemonDetailsContext)

  return (
    <div style={{ display: 'flex' }}>
      <VersionSelector
        setSprite={() => setSpriteGen1(0)}
        chars='RB'
        actualPath={genPath}
        thisPath='gen-i'
      />
      <VersionSelector
        setSprite={() => setSpriteGen1(1)}
        chars='Y'
        actualPath={genPath}
        thisPath='gen-i'
      />
      <VersionSelector
        setSprite={() => setSpriteGen2(0)}
        chars='G'
        actualPath={genPath}
        thisPath='gen-ii'
      />
      <VersionSelector
        setSprite={() => setSpriteGen2(1)}
        chars='S'
        actualPath={genPath}
        thisPath='gen-ii'
      />
      <VersionSelector
        setSprite={() => setSpriteGen2(2)}
        chars='C'
        actualPath={genPath}
        thisPath='gen-ii'
      />
      <VersionSelector
        setSprite={() => setSpriteGen3(0)}
        chars='RS'
        actualPath={genPath}
        thisPath='gen-iii'
      />
      <VersionSelector
        setSprite={() => setSpriteGen3(1)}
        chars='FRLG'
        actualPath={genPath}
        thisPath='gen-iii'
      />
      <VersionSelector
        setSprite={() => setSpriteGen3(2)}
        chars='E'
        actualPath={genPath}
        thisPath='gen-iii'
      />
      <VersionSelector
        setSprite={() => setSpriteGen4(0)}
        chars='DP'
        actualPath={genPath}
        thisPath='gen-iv'
      />
      <VersionSelector
        setSprite={() => setSpriteGen4(1)}
        chars='HGSS'
        actualPath={genPath}
        thisPath='gen-iv'
      />
      <VersionSelector
        setSprite={() => setSpriteGen4(2)}
        chars='Pt'
        actualPath={genPath}
        thisPath='gen-iv'
      />
    </div>
  )
}

export default VersionSelectorContainer