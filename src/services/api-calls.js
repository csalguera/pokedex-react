export const baseURL = process.env.REACT_APP_BASE_URL

export async function getPokemonList(x) {
  const res = await fetch(`${baseURL}/pokemon/?limit=${x}`)
  return res.json()
}