// environment variables
import { baseURL } from "../services/api-calls"

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
    case 'basculin-red-striped':
      return 'basculin'
    case 'darmanitan-standard':
      return 'darmanitan'
    case 'tornadus-incarnate':
      return 'tornadus'
    case 'thundurus-incarnate':
      return 'thundurus'
    case 'landorus-incarnate':
      return 'landorus'
    case 'keldeo-ordinary':
      return 'keldeo'
    case 'meloetta-aria':
      return 'meloetta'
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
    case 'shaymin-land':
      return 'shaymin'
      case 'basculin':
      return 'basculin-red-striped'
    case 'darmanitan':
      return 'darmanitan-standard'
    case 'tornadus':
      return 'tornadus-incarnate'
    case 'thundurus':
      return 'thundurus-incarnate'
    case 'landorus':
      return 'landorus-incarnate'
    case 'keldeo':
      return 'keldeo-ordinary'
    case 'meloetta':
      return 'meloetta-aria'
    default:
      return name
  }
}

export function determineLimit(arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].dexLimit
  }

  return sum
}

export function romanNumeralize(num) {
  const numerals = []

  const i = 'I'
  const v = 'V'
  const x = 'X'

  while (num > 0) {
    if (num - 10 >= 0) {
      num -= 10
      numerals.push(x)
    } else if (num - 5 >= 0) {
      num -= 5
      numerals.push(v)
    } else if (num - 1 >= 0) {
      num -= 1
      numerals.push(i)
    }
  }

  return numerals.join('').replace('VIIII', 'IX').replace('IIII', 'IV')
}

export function pathForResults(num) {
  return `gen-${romanNumeralize(num).toLowerCase()}`
}

export function retrieveId(result) {
  return parseInt(result.url.replace(`${baseURL}/pokemon/`, '').replace('/', ''))
}

export function numForResults(result) {
  const num = retrieveId(result)
  if (num <= 151) {
    return 1
  } else if (num >= 152 && num <= 251) {
    return 2
  } else if (num >= 252 && num <= 386) {
    return 3
  } else if (num >= 387 && num <= 493) {
    return 4
  } else if (num >= 494 && num <= 649) {
    return 5
  }
}