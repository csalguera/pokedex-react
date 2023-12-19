// mui components
import ImageWrapper from "../common/ImageWrapper"

const ConditionImg = (props) => {
  const {
    condition,
    item,
  } = props

  if (!condition) return
  return (
    <ImageWrapper
      src={item?.sprites?.default}
    />
  )
}

export default ConditionImg