import { NavLink } from 'react-router';
import './NavBar.css';

// Menyn som visas på alla sidor.
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
