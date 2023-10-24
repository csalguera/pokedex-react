export const baseURL = process.env.REACT_APP_BASE_URL

export async function getPokemonList(x, y) {
  const res = await fetch(`${baseURL}/pokemon/?limit=${x}&offset=${y}`)
  return res.json()
}

export async function getPokemonDetails(url) {
  const res = await fetch(url)
  return res.json()
}