import { NavLink } from "react-router";

function Navigation() {
  return (
   <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/About" end> About</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      <NavLink to="/Games">Games</NavLink>
    
    </nav>
  )
}

export default Navigation