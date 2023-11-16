const PokemonSprite = (props) => {
  const {
    pokemonDetails,
    spriteVersion,
    genPath,
  } = props

  function determineSprite(path, version) {
    const baseNotation = (pokemonDetails?.sprites?.versions)

    let generation = ''
    switch (path) {
      case 'gen-i':
        generation = baseNotation?.['generation-i']
        break
      case 'gen-ii':
        generation = baseNotation?.['generation-ii']
        break
      case 'gen-iii':
        generation = baseNotation?.['generation-iii']
        break
      case 'gen-iv':
        generation = baseNotation?.['generation-iv']
        break
      default:
        generation = baseNotation?.['generation-i']
        break
    }

    if (path === 'gen-i') {
      let sprite = ''
      switch (version) {
        case 0:
          sprite = generation?.['red-blue']?.front_transparent
          break
        case 1:
          sprite = generation?.yellow?.front_transparent
          break
        default:
          sprite = generation?.['red-blue']?.front_transparent
          break
      }
      return sprite
    }

    if (path === 'gen-ii') {
      let sprite = ''
      switch (version) {
        case 0:
          sprite = generation?.gold.front_transparent
          break;
        case 1:
          sprite = generation?.silver.front_transparent
          break;
        case 2:
          sprite = generation?.crystal.front_transparent
          break;
        default:
          sprite = generation?.crystal.front_transparent
          break;
      }
      return sprite
    }

    if (path === 'gen-iii') {
      let sprite = ''
      switch (version) {
        case 0:
          sprite = generation?.['ruby-sapphire'].front_default
          break
        case 1:
          sprite = generation?.['firered-leafgreen'].front_default
          break
        case 2:
          sprite = generation?.emerald.front_default
          break
          default:
          sprite = generation?.emerald.front_default
          break
      }
      return sprite
    }

    if (path === 'gen-iv') {
      let sprite = ''
      switch (version) {
        case 0:
          sprite = generation?.['diamond-pearl'].front_default
          break;
        case 1:
          sprite = generation?.['heartgold-soulsilver'].front_default
          break;
        case 2:
          sprite = generation?.platinum.front_default
          break;
        default:
          sprite = generation?.platinum.front_default
          break;
      }
      return sprite
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <img
        src={determineSprite(genPath, spriteVersion)}
        alt=""
        width='96px'
      />
    </div>
  )
}

export default PokemonSprite