const ConditionText = (props) => {
  const {
    condition,
    color,
  } = props

  return (
    <>
      {condition ? (
        <p style={{ margin: '0 4px', color: color }}>{condition}</p>
      ) : (
        null
      )}
    </>
  )
}

export default ConditionText