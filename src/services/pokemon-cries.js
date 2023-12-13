export const cryBaseUrl = process.env.REACT_APP_POKEMON_CRIES_BASE_URL

export async function getPokemonCry(name) {
  const res = await fetch(`${cryBaseUrl}/${name}`)
  return res.json()
}