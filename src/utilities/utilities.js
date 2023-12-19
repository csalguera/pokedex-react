export function pascalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function leadingZeros(idx) {
  return idx?.toString().padStart(4, '0')
}

export function removeHyphens(str) {
  const arr = str.split('-')
  let newStr = []
  for (let i = 0; i < arr.length; i++) {
    newStr.push(pascalize(arr[i]))
  }
  return newStr.join(' ')
}

export function determinePath(path, currPath, currGen) {
  const pathName = path.replace('eration', '')
  let pathNum

  switch (pathName) {
    case 'gen-i':
      pathNum = 1
      break
    case 'gen-ii':
      pathNum = 2
      break
    case 'gen-iii':
      pathNum = 3
      break
    default:
      pathNum = 1
      break
  }

  if (pathNum < currGen) {
    return currPath
  } else {
    return pathName
  }
}

export function determineGenNum(path) {
  const pathName = path.replace('eration', '')

  switch (pathName) {
    case 'gen-i':
      return 1
    case 'gen-ii':
      return 2
    case 'gen-iii':
      return 3
    case 'gen-iv':
      return 4
    case 'gen-v':
      return 5
    default:
      return 1
  }
}

export function validateSpecies(name) {
  switch (name) {
    case 'deoxys-normal':
      return 'deoxys'
    case 'wormadam-plant':
      return 'wormadam'
    case 'giratina-altered':
      return 'giratina'
    case 'shaymin-land':
      return 'shaymin'
    default:
      return name
  }
}

export function validateDetails(name) {
  switch (name) {
    case 'deoxys':
      return 'deoxys-normal'
    case 'wormadam':
      return 'wormadam-plant'
    case 'giratina':
      return 'giratina-altered'
    case 'shaymin':
      return 'shaymin-land'
    default:
      return name
  }
}