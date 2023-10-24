import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/gen-i'>Generation I</Link>
      <Link to='/gen-ii'>Generation II</Link>
    </>
  )
}

export default Nav