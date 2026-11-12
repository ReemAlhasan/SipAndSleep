import { NavLink } from 'react-router';
import './NavBar.css';

// The menu shown on every page.
function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/water">Water</NavLink>
      <NavLink to="/sleep">Sleep</NavLink>
      <NavLink to="/mood">Mood</NavLink>
      <NavLink to="/today">Today</NavLink>
      <NavLink to="/history">History</NavLink>
    </nav>
  );
}

export default NavBar;
