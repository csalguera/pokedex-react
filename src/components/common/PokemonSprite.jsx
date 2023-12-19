// npm modules
import { useContext } from "react"

// components
import FlexCenterWrapper from "./FlexCenterWrapper"
import ImageWrapper from "./ImageWrapper"

// context
import { PokemonDetailsContext } from "../../context/PokemonDetailsProvider"

const PokemonSprite = (props) => {
  const {
    spriteGen1,
    spriteGen2,
    spriteGen3,
    spriteGen4,
    spriteGen5,
    genPath,
  } = useContext(PokemonDetailsContext)

  const {
    pokemonDetails
  } = props

  function determineSprite(path, gen1Ver, gen2Ver, gen3Ver, gen4Ver, gen5Ver) {
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
      case 'gen-v':
        generation = baseNotation?.['generation-v']
        break
      default:
        generation = baseNotation?.['generation-i']
        break
    }

    if (path === 'gen-i') {
      let sprite = ''
      switch (gen1Ver) {
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
      switch (gen2Ver) {
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
      switch (gen3Ver) {
        case 0:
          sprite = generation?.['ruby-sapphire'].front_default
          break
        case 1:
          sprite = generation?.['firered-leafgreen'].front_default ?? generation?.emerald.front_default
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
      switch (gen4Ver) {
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

    if (path === 'gen-v') {
      let sprite = ''
      switch (gen5Ver) {
        case 0:
          sprite = generation?.['black-white'].animated?.front_default
          break
        default:
          sprite = generation?.['black-white'].animated
          break
      }
      return sprite
    }
  }

  return (
    <FlexCenterWrapper
      additionalStyles={{
        borderRadius: '10px',
        backgroundColor: 'rgb(240,240,240)',
        p: 2,
        m: 2,
        width: '96px',
        height: '96px',
      }}
    >
      <ImageWrapper
        src={determineSprite(genPath, spriteGen1, spriteGen2, spriteGen3, spriteGen4, spriteGen5)}
      />
    </FlexCenterWrapper>
  )
}

export default PokemonSprite