import { Link } from "react-router-dom"

import GenerationSelector from "../buttons/GenerationSelector"

const GenerationSelectorContainer = (props) => {
  const {
    pokemonDetails,
    genNum,
  } = props

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <GenerationSelector
        pokemonDetails={pokemonDetails}
        genNum={genNum}
        path={'gen-i'}
        val={1}
      />
      <GenerationSelector
        pokemonDetails={pokemonDetails}
        genNum={genNum}
        path={'gen-ii'}
        val={2}
      />
      <GenerationSelector
        pokemonDetails={pokemonDetails}
        genNum={genNum}
        path={'gen-iii'}
        val={3}
      />
      <GenerationSelector
        pokemonDetails={pokemonDetails}
        genNum={genNum}
        path={'gen-iv'}
        val={4}
      />
    </div>
  )
}

export default GenerationSelectorContainer