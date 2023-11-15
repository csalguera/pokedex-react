import { Link } from "react-router-dom"

const Nav = () => {
  const gen1 = {
    regionName: 'Kanto',
    dexOffset: 0,
    dexLimit: 151,
    genPath: 'gen-i',
    genNum: 1,
  }

  const gen2 = {
    regionName: 'Johto',
    dexOffset: 151,
    dexLimit: 100,
    genPath: 'gen-ii',
    genNum: 2,
  }

  const gen3 = {
    regionName: 'Hoenn',
    dexOffset: 251,
    dexLimit: 135,
    genPath: 'gen-iii',
    genNum: 3,
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link
        to='/'
        style={{
          margin: '8px'
        }}
      >
        Home
      </Link>
      <Link
        to='/gen-i'
        state={gen1}
        style={{
          margin: '8px'
        }}
      >
        Kanto
      </Link>
      <Link
        to='/gen-ii'
        state={gen2}
        style={{
          margin: '8px'
        }}
      >
        Johto
      </Link>
      <Link
        to='/gen-iii'
        state={gen3}
        style={{
          margin: '8px'
        }}
      >
        Hoenn
      </Link>
    </div>
  )
}

export default Nav