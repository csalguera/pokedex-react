import { Link } from "react-router-dom"

const Nav = () => {
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
        style={{
          margin: '8px'
        }}
      >
        Kanto
      </Link>
      <Link
        to='/gen-ii'
        style={{
          margin: '8px'
        }}
      >
        Johto
      </Link>
      <Link
        to='/gen-iii'
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