import { Link, NavLink } from 'react-router'
import AboutUsModal from './AboutUs'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Sip &amp; Sleep
      </Link>

      <ul className="navbar-links">
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/summary">Today's Summary</NavLink>
        </li>
        <li>
          <NavLink to="/history">History</NavLink>
        </li>
        <li>
          <AboutUsModal />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
