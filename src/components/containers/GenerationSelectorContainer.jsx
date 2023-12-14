// components
import GenerationSelector from "../buttons/GenerationSelector"

const GenerationSelectorContainer = () => {

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <GenerationSelector
        path={'gen-i'}
        val={1}
      />
      <GenerationSelector
        path={'gen-ii'}
        val={2}
      />
      <GenerationSelector
        path={'gen-iii'}
        val={3}
      />
      <GenerationSelector
        path={'gen-iv'}
        val={4}
      />
    </div>
  )
}

export default GenerationSelectorContainer