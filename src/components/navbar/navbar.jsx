import { Link, NavLink } from "react-router-dom";
import "./navbar.css"

const NavigationBar = () => {
    const linkStyle ={
        textDecoration:"none",
    }
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link">
                <NavLink to={"/"} style={linkStyle} >Main </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <NavLink to={"about"} style={linkStyle}>About </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default NavigationBar;
