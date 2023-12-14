// npm modules
import { useState, useEffect } from "react"

// services
import { getPokemonCry } from "../../services/pokemon-cries"

const Cry = (props) => {
  const { name } = props
  const [pokemonCry, setPokemonCry] = useState({})

  useEffect(() => {
    const fetchCry = async () => {
      const cryData = await getPokemonCry(name)
      setPokemonCry(cryData)
    }
    fetchCry()
  }, [name])

  if (!pokemonCry) return
  const cry = new Audio(pokemonCry.url)

  return (
    <button
      onClick={() => cry.play()}
    >
      Play Cry
    </button>
  )
}

export default Cry