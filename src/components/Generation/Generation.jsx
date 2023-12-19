// components
import GenerationBtn from "./GenerationBtn"
import FlexCenterWrapper from "../common/FlexCenterWrapper"

const Generation = () => {
  const generations = [
    { path: 'gen-i', val: 1 },
    { path: 'gen-ii', val: 2 },
    { path: 'gen-iii', val: 3 },
    { path: 'gen-iv', val: 4 },
    { path: 'gen-v', val: 5 },
  ]
  return (
    <FlexCenterWrapper>
      {generations.map(generation => (
        <GenerationBtn
          key={generation.path}
          path={generation.path}
          generationVal={generation.val}
        />
      ))}
    </FlexCenterWrapper>
  )
}

export default Generation