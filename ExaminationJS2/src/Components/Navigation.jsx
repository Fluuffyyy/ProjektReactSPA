import { NavLink } from "react-router-dom";
import "../Styling/Header.css";

function Navigation() {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="logo"> 
          <NavLink to="/">The <span> Gaming </span> Hub </NavLink>
        </h1>

        <nav className="nav">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/About" className="nav-link">
            About
          </NavLink>
          <NavLink to="/Contact" className="nav-link">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
