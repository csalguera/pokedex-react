// components
import GenerationBtn from "./GenerationBtn"
import FlexCenterWrapper from "../common/FlexCenterWrapper"

const Generation = () => {

  return (
    <FlexCenterWrapper>
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
    </FlexCenterWrapper>
  )
}

export default Generation