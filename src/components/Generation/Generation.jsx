// components
import GenerationBtn from "./GenerationBtn"

const Generation = () => {

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <GenerationBtn
        path={'gen-i'}
        generationVal={1}
      />
      <GenerationBtn
        path={'gen-ii'}
        generationVal={2}
      />
      <GenerationBtn
        path={'gen-iii'}
        generationVal={3}
      />
      <GenerationBtn
        path={'gen-iv'}
        generationVal={4}
      />
    </div>
  )
}

export default Generation