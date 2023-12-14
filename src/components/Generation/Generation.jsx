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
        val={1}
      />
      <GenerationBtn
        path={'gen-ii'}
        val={2}
      />
      <GenerationBtn
        path={'gen-iii'}
        val={3}
      />
      <GenerationBtn
        path={'gen-iv'}
        val={4}
      />
    </div>
  )
}

export default Generation