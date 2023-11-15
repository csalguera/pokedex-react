export const baseURL = process.env.REACT_APP_BASE_URL

export async function getPokemonList(x, y) {
  const res = await fetch(`${baseURL}/pokemon/?limit=${x}&offset=${y}`)
  return res.json()
}

export async function getPokemonDetails(name) {
  const res = await fetch(`${baseURL}/pokemon/${name}`)
  return res.json()
}

export async function getPokemonSpecies(name) {
  const res = await fetch(`${baseURL}/pokemon-species/${name}`)
  return res.json()
}

export async function getEvolutionChainData(url) {
  const res = await fetch(url)
  return res.json()
}

export async function getEvolutionTrigger(name) {
  const res = await fetch(`${baseURL}/evolution-trigger/${name}`)
  return res.json()
}

export async function getItem(name) {
  const res = await fetch(`${baseURL}/item/${name}`)
  return res.json()
}