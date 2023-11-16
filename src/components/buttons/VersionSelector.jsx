const VersionSelector = (props) => {
  const {
    setSprite,
    chars,
    actualPath,
    thisPath,
  } = props

  let display = ''

  switch (actualPath) {
    case thisPath:
      display = 'initial'
      break;
    default:
      display = 'none'
      break;
  }

  return (
    <button
      onClick={() => setSprite()}
      style={{
        width: '50px',
        borderRadius: '100px',
        display: display
      }}
      >
      {chars}
    </button>
  )
}

export default VersionSelector