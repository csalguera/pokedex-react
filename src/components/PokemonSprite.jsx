const PokemonSprite = (props) => {
  const {
    pokemonDetails,
    path,
    spriteVersion,
  } = props

  const gen1 = (path.includes('/gen-i/'))
  const gen2 = (path.includes('/gen-ii/'))
  const gen3 = (path.includes('/gen-iii/'))

  const spriteRedBlue = (pokemonDetails?.sprites?.versions['generation-i']['red-blue']?.front_transparent)
  const spriteYellow = (pokemonDetails?.sprites?.versions['generation-i'].yellow?.front_transparent)
  const spriteGold = (pokemonDetails?.sprites?.versions['generation-ii'].gold?.front_transparent)
  const spriteSilver = (pokemonDetails?.sprites?.versions['generation-ii'].silver?.front_transparent)
  const spriteCrystal = (pokemonDetails?.sprites?.versions['generation-ii'].crystal?.front_transparent)
  const spriteRubySapphire = (pokemonDetails?.sprites?.versions['generation-iii']['ruby-sapphire']?.front_default)
  const spriteFireRedLeafGreen = (pokemonDetails?.sprites?.versions['generation-iii']['firered-leafgreen']?.front_default)
  const spriteEmerald = (pokemonDetails?.sprites?.versions['generation-iii'].emerald?.front_default)

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
            width='96px'
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
            width='96px'
          />
        </div>
      ) : gen3 ? (
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
                spriteRubySapphire
              ) :  spriteVersion === 1 ? (
                spriteFireRedLeafGreen
              ) : (
                spriteEmerald
              )
            }
            alt=""
            width='96px'
          />
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default PokemonSprite