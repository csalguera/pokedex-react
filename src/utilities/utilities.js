export function pascalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function leadingZeros(idx) {
  return idx.toString().padStart(4, '0')
}

export function removeHyphens(str) {
  const arr = str.split('-')
  return `${pascalize(arr[0])} ${pascalize(arr[1])}`
}