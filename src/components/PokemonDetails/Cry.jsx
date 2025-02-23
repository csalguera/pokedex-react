// npm modules
import { useState, useEffect, useRef } from "react"

// mui components
import { Button } from "@mui/material"

// services
import { getPokemonCry } from "../../services/pokemon-cries"

// utilities
import { mapToCry } from "../../utilities/utilities"

const Cry = (props) => {
  const { name } = props
  const [pokemonCry, setPokemonCry] = useState({})
  const audioRef = useRef(null)

  useEffect(() => {
    const fetchCry = async () => {
      const cryData = await getPokemonCry(mapToCry(name))
      if (cryData && cryData.url) {
        setPokemonCry(cryData)
        audioRef.current = new Audio(cryData.url)
      }
    }
    fetchCry()
  }, [name])

  return (
    <Button
      sx={{
        m: 1,
      }}
      variant="contained"
      onClick={() => audioRef.current && audioRef.current.play()}
      disabled={!pokemonCry.url}
    >
      Play Cry
    </Button>
  )
}

export default Cry