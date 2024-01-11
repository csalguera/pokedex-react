// npm modules
import { useState, useEffect } from "react"

// mui components
import { Button } from "@mui/material"

// services
import { getPokemonCry } from "../../services/pokemon-cries"

// utilities
import { mapToCry } from "../../utilities/utilities"

const Cry = (props) => {
  const { name } = props
  const [pokemonCry, setPokemonCry] = useState({})

  useEffect(() => {
    const fetchCry = async () => {
      const cryData = await getPokemonCry(mapToCry(name))
      setPokemonCry(cryData)
    }
    fetchCry()
  }, [name])

  if (!pokemonCry) return
  const cry = new Audio(pokemonCry.url)

  return (
    <Button
      sx={{
        m: 1,
      }}
      variant="contained"
      onClick={() => cry.play()}
    >
      Play Cry
    </Button>
  )
}

export default Cry