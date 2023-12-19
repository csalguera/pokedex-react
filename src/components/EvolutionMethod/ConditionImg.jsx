const ConditionImg = (props) => {
  const {
    condition,
    item,
  } = props

  return (
    <>
      {condition ? (
        <img
          src={item?.sprites?.default}
          alt="" 
        />
      ) : (
        null
      )}
    </>
  )
}

export default ConditionImg