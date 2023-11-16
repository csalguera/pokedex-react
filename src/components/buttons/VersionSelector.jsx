const VersionSelector = (props) => {
  const {
    genPath,
    spriteGen1,
    spriteGen2,
    spriteGen3,
    spriteGen4,
    setSpriteGen1,
    setSpriteGen2,
    setSpriteGen3,
    setSpriteGen4,
  } = props

  return (
    <>
      {genPath === 'gen-i' ? (
        <div
          style={{
            display: 'flex'
          }}
        >
          <button
            onClick={() => setSpriteGen1(0)}
            style={{
              backgroundImage:
                spriteGen1 === 0 ? (
                  'linear-gradient(to left, red, blue)'
                ) : (
                  'linear-gradient(to right, yellow, orange)'
                ),
              color: spriteGen1 === 0 ? 'white' : 'black',
              width: '50px',
              borderRadius: '100px'
            }}
            >
            RB
          </button>
          <button
            onClick={() => setSpriteGen1(1)}
            style={{
              backgroundImage:
                spriteGen1 === 0 ? (
                  'linear-gradient(to right, red, blue)'
                ) : (
                  'linear-gradient(to left, yellow, orange)'
                ),
              color: spriteGen1 === 0 ? 'white' : 'black',
              width: '50px',
              borderRadius: '100px'
            }}
          >
            Y
          </button>
        </div>
      ) : genPath === 'gen-ii' ? (
        <div
          style={{
            display: 'flex'
          }}
        >
          <button
            onClick={() => setSpriteGen2(0)}
            style={{
              backgroundImage:
                spriteGen2 === 0 ? (
                  'linear-gradient(gold, goldenrod)'
                ) : spriteGen2 === 1 ? (
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
            onClick={() => setSpriteGen2(1)}
            style={{
              backgroundImage:
                spriteGen2 === 0 ? (
                  'linear-gradient(gold, goldenrod)'
                ) : spriteGen2 === 1 ? (
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
            onClick={() => setSpriteGen2(2)}
            style={{
              backgroundImage:
                spriteGen2 === 0 ? (
                  'linear-gradient(gold, goldenrod)'
                ) : spriteGen2 === 1 ? (
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
      ) : genPath === 'gen-iii' ? (
        <div
          style={{
            display: 'flex'
          }}
        >
          <button
            onClick={() => setSpriteGen3(0)}
            style={{
              backgroundImage:
                spriteGen3 === 0 ? (
                  'linear-gradient(red, blue)'
                ) : spriteGen3 === 1 ? (
                  'linear-gradient(red, green)'
                  ) : (
                  'linear-gradient(green, white)'
                ),
              color:
                spriteGen3 === 0 ? (
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
            onClick={() => setSpriteGen3(1)}
            style={{
              backgroundImage:
                spriteGen3 === 0 ? (
                  'linear-gradient(red, blue)'
                ) : spriteGen3 === 1 ? (
                  'linear-gradient(red, green)'
                  ) : (
                  'linear-gradient(green, white)'
                ),
              color:
                spriteGen3 === 0 ? (
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
            onClick={() => setSpriteGen3(2)}
            style={{
              backgroundImage:
                spriteGen3 === 0 ? (
                  'linear-gradient(red, blue)'
                ) : spriteGen3 === 1 ? (
                  'linear-gradient(red, green)'
                  ) : (
                  'linear-gradient(green, white)'
                ),
              color:
                spriteGen3 === 0 ? (
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
      ) : genPath === 'gen-iv' ? (
        <div
          style={{
            display: 'flex'
          }}
        >
          <button
            onClick={() => setSpriteGen4(0)}
            style={{
              backgroundImage:
                spriteGen4 === 0 ? (
                  'linear-gradient(red, blue)'
                ) : spriteGen4 === 1 ? (
                  'linear-gradient(red, green)'
                  ) : (
                  'linear-gradient(green, white)'
                ),
              color:
                spriteGen4 === 0 ? (
                  'white'
                ) : (
                  'black'
                ),
              width: '50px',
              borderRadius: '100px'
            }}
          >
            DP
          </button>
          <button
            onClick={() => setSpriteGen4(1)}
            style={{
              backgroundImage:
                spriteGen4 === 0 ? (
                  'linear-gradient(red, blue)'
                ) : spriteGen4 === 1 ? (
                  'linear-gradient(red, green)'
                  ) : (
                  'linear-gradient(green, white)'
                ),
              color:
                spriteGen4 === 0 ? (
                  'white'
                ) : (
                  'black'
                ),
              width: '50px',
              borderRadius: '100px'
            }}
          >
            HGSS
          </button>
          <button
            onClick={() => setSpriteGen4(2)}
            style={{
              backgroundImage:
                spriteGen4 === 0 ? (
                  'linear-gradient(red, blue)'
                ) : spriteGen4 === 1 ? (
                  'linear-gradient(red, green)'
                  ) : (
                  'linear-gradient(green, white)'
                ),
              color:
                spriteGen4 === 0 ? (
                  'white'
                ) : (
                  'black'
                ),
              width: '50px',
              borderRadius: '100px'
            }}
          >
            Pt
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default VersionSelector