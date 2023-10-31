const SpriteVersionSelector = (props) => {
  const {
    generation,
    setSpriteVersion
  } = props

  return (
    <>
      {generation === 1 ? (
        <div
          style={{
            display: 'flex'
          }}
        >
          <button
            onClick={() => setSpriteVersion(0)}
          >
            RB
          </button>
          <button
            onClick={() => setSpriteVersion(1)}
          >
            Y
          </button>
        </div>
      ) : generation === 2 ? (
        <div
          style={{
            display: 'flex'
          }}
        >
          <button
            onClick={() => setSpriteVersion(0)}
          >
            G
          </button>
          <button
            onClick={() => setSpriteVersion(1)}
          >
            S
          </button>
          <button
            onClick={() => setSpriteVersion(2)}
          >
            C
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default SpriteVersionSelector