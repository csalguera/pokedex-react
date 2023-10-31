const PokemonSprite = (props) => {
  const {
    pokemonDetails,
    path,
    spriteVersion,
  } = props

  const gen1 = (path.includes('/gen-i/'))
  const gen2 = (path.includes('/gen-ii/'))

  const spriteRedBlue = (pokemonDetails?.sprites?.versions['generation-i']['red-blue']?.front_transparent)
  const spriteYellow = (pokemonDetails?.sprites?.versions['generation-i'].yellow?.front_transparent)
  const spriteGold = (pokemonDetails?.sprites?.versions['generation-ii'].gold?.front_transparent)
  const spriteSilver = (pokemonDetails?.sprites?.versions['generation-ii'].silver?.front_transparent)
  const spriteCrystal = (pokemonDetails?.sprites?.versions['generation-ii'].crystal?.front_transparent)

  return (
    <>
      {gen1 ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img
            src={
              spriteVersion === 0 ? (
                spriteRedBlue
              ) : (
                spriteYellow
              )
            }
            alt=""
          />
        </div>
      ) : gen2 ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img
            src={
              spriteVersion === 0 ? (
                spriteGold
              ) :  spriteVersion === 1 ? (
                spriteSilver
              ) : (
                spriteCrystal
              )
            }
            alt=""
          />
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default PokemonSprite