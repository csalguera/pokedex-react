// utilities
import { mapToSpecies, mapToDetails } from "../utilities/utilities"

export const baseURL = process.env.REACT_APP_API_BASE_URL

export async function getPokemonList(x, y) {
  const res = await fetch(`${baseURL}/pokemon/?limit=${x}&offset=${y}`)
  return res.json()
}

export async function getPokemonDetails(name) {
  const res = await fetch(`${baseURL}/pokemon/${mapToDetails(name)}`)
  return res.json()
}

export async function getPokemonSpecies(name) {
  const res = await fetch(`${baseURL}/pokemon-species/${mapToSpecies(name)}`)
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

export async function getAbility(name) {
  const res = await fetch(`${baseURL}/ability/${name}`)
  return res.json()
}

export async function getMove(name) {
  const res = await fetch(`${baseURL}/move/${name}`)
  return res.json()
}