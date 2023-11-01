const SpriteVersionSelector = (props) => {
  const {
    generation,
    spriteVersion,
    setSpriteVersion,
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
            style={{
              backgroundImage:
                spriteVersion === 0 ? (
                  'linear-gradient(to left, red, blue)'
                ) : (
                  'linear-gradient(to right, yellow, orange)'
                ),
              color: spriteVersion === 0 ? 'white' : 'black',
              width: '50px',
              borderRadius: '100px'
            }}
            >
            RB
          </button>
          <button
            onClick={() => setSpriteVersion(1)}
            style={{
              backgroundImage:
                spriteVersion === 0 ? (
                  'linear-gradient(to right, red, blue)'
                ) : (
                  'linear-gradient(to left, yellow, orange)'
                ),
              color: spriteVersion === 0 ? 'white' : 'black',
              width: '50px',
              borderRadius: '100px'
            }}
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
            style={{
              backgroundImage:
                spriteVersion === 0 ? (
                  'linear-gradient(gold, goldenrod)'
                ) : spriteVersion === 1 ? (
                  'linear-gradient(lightgray, gray)'
                  ) : (
                  'linear-gradient(#b2c0ef, #7186c2)'
                ),
              width: '50px',
              borderRadius: '100px'
            }}
          >
            G
          </button>
          <button
            onClick={() => setSpriteVersion(1)}
            style={{
              backgroundImage:
                spriteVersion === 0 ? (
                  'linear-gradient(gold, goldenrod)'
                ) : spriteVersion === 1 ? (
                  'linear-gradient(lightgray, gray)'
                  ) : (
                  'linear-gradient(#b2c0ef, #7186c2)'
                ),
              width: '50px',
              borderRadius: '100px'
            }}
          >
            S
          </button>
          <button
            onClick={() => setSpriteVersion(2)}
            style={{
              backgroundImage:
                spriteVersion === 0 ? (
                  'linear-gradient(gold, goldenrod)'
                ) : spriteVersion === 1 ? (
                  'linear-gradient(lightgray, gray)'
                  ) : (
                  'linear-gradient(#b2c0ef, #7186c2)'
                ),
              width: '50px',
              borderRadius: '100px'
            }}
          >
            C
          </button>
        </div>
      ) : generation === 3 ? (
        <div
          style={{
            display: 'flex'
          }}
        >
          <button
            onClick={() => setSpriteVersion(0)}
            style={{
              backgroundImage:
                spriteVersion === 0 ? (
                  'linear-gradient(red, blue)'
                ) : spriteVersion === 1 ? (
                  'linear-gradient(red, green)'
                  ) : (
                  'linear-gradient(green, white)'
                ),
              color:
                spriteVersion === 0 ? (
                  'white'
                ) : (
                  'black'
                ),
              width: '50px',
              borderRadius: '100px'
            }}
          >
            RS
          </button>
          <button
            onClick={() => setSpriteVersion(1)}
            style={{
              backgroundImage:
                spriteVersion === 0 ? (
                  'linear-gradient(red, blue)'
                ) : spriteVersion === 1 ? (
                  'linear-gradient(red, green)'
                  ) : (
                  'linear-gradient(green, white)'
                ),
              color:
                spriteVersion === 0 ? (
                  'white'
                ) : (
                  'black'
                ),
              width: '50px',
              borderRadius: '100px'
            }}
          >
            FRLG
          </button>
          <button
            onClick={() => setSpriteVersion(2)}
            style={{
              backgroundImage:
                spriteVersion === 0 ? (
                  'linear-gradient(red, blue)'
                ) : spriteVersion === 1 ? (
                  'linear-gradient(red, green)'
                  ) : (
                  'linear-gradient(green, white)'
                ),
              color:
                spriteVersion === 0 ? (
                  'white'
                ) : (
                  'black'
                ),
              width: '50px',
              borderRadius: '100px'
            }}
          >
            E
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default SpriteVersionSelector