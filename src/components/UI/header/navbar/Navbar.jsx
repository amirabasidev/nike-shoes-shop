import { NavLink } from "react-router-dom";

import navbarItems from "../../../../config/navbarItems";

import classes from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.navbar__ul}>
        {navbarItems.map(({ key, title, url }) => {
          const isActiveClass = ({ isActive }) =>
            isActive
              ? `${classes.navbar__link} ${classes.navbar__link_active}`
              : classes.navbar__link;
          return (
            <li className={classes.navbar__item} key={key}>
              <NavLink className={isActiveClass} to={url}>
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
