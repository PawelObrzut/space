import { NavLink } from 'react-router-dom'

const NavBar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <nav>
      <ul id="primary-navigation"
        className={`primary-navigation underline-indicators flex ${isOpen ? 'menuVisible' : ''}`}
        data-visible={isOpen}
      >
        <NavLink to="/" className="ff-sans-cond text-white uppercase letter-spacing-2">
          <li>
            <span aria-hidden="true">00</span>Home
          </li>
        </NavLink>
        <NavLink className="ff-sans-cond text-white uppercase letter-spacing-2" to="/destination">
          <li>
            <span aria-hidden="true">01</span>Destination
          </li>
        </NavLink>
        <NavLink className="ff-sans-cond text-white uppercase letter-spacing-2" to="/crew">
          <li>
            <span aria-hidden="true">02</span>Crew
          </li>
        </NavLink>
        <NavLink className="ff-sans-cond text-white uppercase letter-spacing-2" to="/technology">
          <li>
            <span aria-hidden="true">03</span>Technology
          </li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default NavBar