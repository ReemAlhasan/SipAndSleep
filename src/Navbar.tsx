import { Link, NavLink } from "react-router";
import AboutUsModal from "./AboutUs";
import "./Navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function Navbar() {
  // Log out: Firebase forgets the user, and App.tsx shows the login page again
  function handleLogOut() {
    signOut(auth);
  }
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Sip &amp; Sleep
      </Link>

      <ul className="navbar-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/today">Today's Summary</NavLink>
        </li>
        <li>
          <NavLink to="/history">History</NavLink>
        </li>
        <li>
          <AboutUsModal />
        </li>
        <li>
          <button type="button" onClick={handleLogOut}>
            Log out
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
