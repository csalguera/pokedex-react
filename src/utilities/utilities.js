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

export function determinePath(str) {
  return str.replace('eration', '')
}

export function determineGenNum(str) {
  switch (str) {
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
    default:
      return name
  }
}