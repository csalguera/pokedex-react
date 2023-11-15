const PokemonSprite = (props) => {
  const {
    pokemonDetails,
    spriteVersion,
    genPath,
  } = props

  const spriteRedBlue = (pokemonDetails?.sprites?.versions['generation-i']['red-blue']?.front_transparent)
  const spriteYellow = (pokemonDetails?.sprites?.versions['generation-i'].yellow?.front_transparent)
  const spriteGold = (pokemonDetails?.sprites?.versions['generation-ii'].gold?.front_transparent)
  const spriteSilver = (pokemonDetails?.sprites?.versions['generation-ii'].silver?.front_transparent)
  const spriteCrystal = (pokemonDetails?.sprites?.versions['generation-ii'].crystal?.front_transparent)
  const spriteRubySapphire = (pokemonDetails?.sprites?.versions['generation-iii']['ruby-sapphire']?.front_default)
  const spriteFireRedLeafGreen = (pokemonDetails?.sprites?.versions['generation-iii']['firered-leafgreen']?.front_default)
  const spriteEmerald = (pokemonDetails?.sprites?.versions['generation-iii'].emerald?.front_default)
  const spriteDiamondPearl = (pokemonDetails?.sprites?.versions['generation-iv']['diamond-pearl']?.front_default)
  const spriteHeartGoldSoulSilver = (pokemonDetails?.sprites?.versions['generation-iv']['heartgold-soulsilver']?.front_default)
  const spritePlatinum = (pokemonDetails?.sprites?.versions['generation-iv'].platinum?.front_default)

  return (
    <>
      {genPath === 'gen-i' ? (
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
      ) : genPath === 'gen-ii' ? (
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
      ) : genPath === 'gen-iii' ? (
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
                spriteFireRedLeafGreen ??
                spriteEmerald
              ) : (
                spriteEmerald
              )
            }
            alt=""
            width='96px'
          />
        </div>
      ) : genPath === 'gen-iv' ? (
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
                spriteDiamondPearl
              ) :  spriteVersion === 1 ? (
                spriteHeartGoldSoulSilver ??
                spritePlatinum
              ) : (
                spritePlatinum
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