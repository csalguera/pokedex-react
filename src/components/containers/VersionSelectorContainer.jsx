// components
import VersionSelector from "../buttons/VersionSelector"

const VersionSelectorContainer = (props) => {
  const {
    genPath,
    setSpriteGen1,
    setSpriteGen2,
    setSpriteGen3,
    setSpriteGen4,
  } = props

  return (
    <div style={{ display: 'flex' }}>
      {genPath === 'gen-i' ? (
        <>
          <VersionSelector
            setSprite={() => setSpriteGen1(0)}
            chars='RB'
          />
          <VersionSelector
            setSprite={() => setSpriteGen1(1)}
            chars='Y'
          />
        </>
      ) : genPath === 'gen-ii' ? (
        <>
          <VersionSelector
            setSprite={() => setSpriteGen2(0)}
            chars='G'
          />
          <VersionSelector
            setSprite={() => setSpriteGen2(1)}
            chars='S'
          />
          <VersionSelector
            setSprite={() => setSpriteGen2(2)}
            chars='C'
          />
        </>
      ) : genPath === 'gen-iii' ? (
        <>
          <VersionSelector
            setSprite={() => setSpriteGen3(0)}
            chars='RS'
          />
          <VersionSelector
            setSprite={() => setSpriteGen3(1)}
            chars='FRLG'
          />
          <VersionSelector
            setSprite={() => setSpriteGen3(2)}
            chars='E'
          />
        </>
      ) : genPath === 'gen-iv' ? (
        <>
          <VersionSelector
            setSprite={() => setSpriteGen4(0)}
            chars='DP'
          />
          <VersionSelector
            setSprite={() => setSpriteGen4(1)}
            chars='HGSS'
          />
          <VersionSelector
            setSprite={() => setSpriteGen4(2)}
            chars='Pt'
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default VersionSelectorContainer