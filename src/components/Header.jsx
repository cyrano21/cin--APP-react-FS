import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>React Movies</h1>
      <nav>
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Accueil
          </NavLink>

          <NavLink
            to="/favorite"
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Coups de coeur
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
