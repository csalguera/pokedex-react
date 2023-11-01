import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/gen-i'>Kanto</Link>
      <Link to='/gen-ii'>Johto</Link>
    </>
  )
}

export default Nav