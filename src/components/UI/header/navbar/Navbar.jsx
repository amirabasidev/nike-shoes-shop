import { Menu } from "iconsax-react";
import { NavLink } from "react-router-dom";

import navbarItems from "../../../../config/navbarItems";
import useToggle from "../../../../hooks/useToggle";

import classes from "./navbar.module.css";

import navbarLogo from '../../../../assets/images/logo__nav.jpg'

const Navbar = () => {
  const [navbar__Ref, openNavbar, closeNavbar, ContainerToggle] = useToggle(
    classes.navbar__show,
  );

  return (
    <>
      <button className={`icon ${classes.navbar__open}`} onClick={openNavbar}>
        <Menu size="100%" />
      </button>
      <ContainerToggle>
        <nav className={classes.navbar} ref={navbar__Ref}>
          <div className={classes.navbar__logo}>
            <img src={navbarLogo} alt="logo__navbar" />
          </div>
          <ul className={classes.navbar__ul}>
            {navbarItems.map(({ key, title, url }) => {
              const isActiveClass = ({ isActive }) =>
                isActive
                  ? `${classes.navbar__link} ${classes.navbar__link_active}`
                  : classes.navbar__link;
              return (
                <li
                  onClick={closeNavbar}
                  className={classes.navbar__item}
                  key={key}
                >
                  <NavLink className={isActiveClass} to={url}>
                    {title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </ContainerToggle>
    </>
  );
};

export default Navbar;
