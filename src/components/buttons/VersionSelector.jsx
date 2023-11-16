const VersionSelector = (props) => {
  const {
    setSprite,
    chars,
  } = props

  return (
    <button
      onClick={() => setSprite()}
      style={{
        width: '50px',
        borderRadius: '100px'
      }}
      >
      {chars}
    </button>
  )
}

export default VersionSelector