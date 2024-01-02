export const pages = [
  { regionName: 'Kanto', dexOffset: 0, dexLimit: 151, genPath: 'gen-i', genNum: 1 },
  { regionName: 'Johto', dexOffset: 151, dexLimit: 100, genPath: 'gen-ii', genNum: 2 },
  { regionName: 'Hoenn', dexOffset: 251, dexLimit: 135, genPath: 'gen-iii', genNum: 3 },
  { regionName: 'Sinnoh', dexOffset: 386, dexLimit: 107, genPath: 'gen-iv', genNum: 4 },
  { regionName: 'Unova', dexOffset: 493, dexLimit: 156, genPath: 'gen-v', genNum: 5 },
  // gen 6:
  // { regionName: 'Kalos', dexOffset: 649, dexLimit: 72, genPath: 'gen-vi', genNum: 6 },
]

export const versions = [
  { val: 0, thisPath: 'gen-i', chars: 'RB', setSprite: 'spriteGen1' },
  { val: 1, thisPath: 'gen-i', chars: 'Y', setSprite: 'spriteGen1' },
  { val: 0, thisPath: 'gen-ii', chars: 'G', setSprite: 'spriteGen2' },
  { val: 1, thisPath: 'gen-ii', chars: 'S', setSprite: 'spriteGen2' },
  { val: 2, thisPath: 'gen-ii', chars: 'C', setSprite: 'spriteGen2' },
  { val: 0, thisPath: 'gen-iii', chars: 'RS', setSprite: 'spriteGen3' },
  { val: 1, thisPath: 'gen-iii', chars: 'FRLG', setSprite: 'spriteGen3' },
  { val: 2, thisPath: 'gen-iii', chars: 'E', setSprite: 'spriteGen3' },
  { val: 0, thisPath: 'gen-iv', chars: 'DP', setSprite: 'spriteGen4' },
  { val: 1, thisPath: 'gen-iv', chars: 'HGSS', setSprite: 'spriteGen4' },
  { val: 2, thisPath: 'gen-iv', chars: 'Pt', setSprite: 'spriteGen4' },
  { val: 0, thisPath: 'gen-v', chars: 'BW / B2W2', setSprite: 'spriteGen5' },
]

export function determineSprite(details, path, sprites) {
  const baseNotation = (details?.sprites?.versions)

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
    switch (sprites.spriteGen1) {
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
    switch (sprites.spriteGen2) {
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
    switch (sprites.spriteGen3) {
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
    switch (sprites.spriteGen4) {
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
    switch (sprites.spriteGen5) {
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