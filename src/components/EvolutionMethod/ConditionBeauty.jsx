// components
import ImageWrapper from "../common/ImageWrapper"

const ConditionBeauty = ({ beautyCondition }) => {
  if (!beautyCondition) return

  return (
    <ImageWrapper
      src={beautyCondition}
      width='20px'
    />
  )
}

export default ConditionBeauty