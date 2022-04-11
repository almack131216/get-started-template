import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <div className='brand-logo'>
        <Link to='/'>LOGO</Link>
      </div>
      <div className='menu'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/styles'>Styles</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
