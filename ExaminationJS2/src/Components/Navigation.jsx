import { NavLink } from "react-router-dom";
import "../Styling/Header.css";

function Navigation() {
  return (
    <header className="header">
      <div className="header-inner">
<h1 className="logo">
  <NavLink to="/" className="logo-link">
    The <span className="logo-accent">Gaming</span> Hub
  </NavLink>
</h1>

 <div className="header-lion">
    <img
      src="/logo-lion.png"
      alt="The Gaming Hub"
      className="header-lion-img"
    />
  </div>

        <nav className="nav">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
