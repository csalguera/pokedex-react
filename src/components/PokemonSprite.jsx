const PokemonSprite = (props) => {
  const {
    pokemonDetails,
    path,
  } = props

  const gen1 = (path.includes('/gen-i/'))
  const gen2 = (path.includes('/gen-ii/'))

  const spriteRedBlue = (pokemonDetails?.sprites?.versions['generation-i']['red-blue']?.front_transparent)
  const spriteYellow = (pokemonDetails?.sprites?.versions['generation-i'].yellow?.front_transparent)
  const spriteGold = (pokemonDetails?.sprites?.versions['generation-ii'].gold?.front_transparent)
  const spriteSilver = (pokemonDetails?.sprites?.versions['generation-ii'].silver?.front_transparent)
  const spriteCrystal = (pokemonDetails?.sprites?.versions['generation-ii'].crystal?.front_transparent)

  console.log(pokemonDetails);

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
          <img src={spriteRedBlue} alt="" />
          <img src={spriteYellow} alt="" />
        </div>
      ) : gen2 ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img src={spriteGold} alt="" />
          <img src={spriteSilver} alt="" />
          <img src={spriteCrystal} alt="" />
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default PokemonSprite