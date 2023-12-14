// npm modules
import { useState, useEffect } from "react"
import { Button } from "@mui/material"

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
    <Button
      sx={{
        margin: '8px',
      }}
      variant="contained"
      onClick={() => cry.play()}
    >
      Play Cry
    </Button>
  )
}

export default Cry