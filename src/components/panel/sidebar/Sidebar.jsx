import { createElement } from "react";
import { useDispatch } from "react-redux";
import { LogoutCurve, TextalignLeft } from "iconsax-react";
import { Link, useLocation } from "react-router-dom";

import useToggle from "../../../hooks/useToggle";
import sidebarItems from "../../../config/sidebarItems";
import { logoutUser } from "../../../redux/user/userActions";

import classes from "./sidebar.module.css";

const Sidebar = () => {
  const currentUrl = useLocation().pathname;

  const dispatch = useDispatch();

  const [
    sidebar__Ref,
    openSidebar,
    closeSidebar,
    SidebarContainer,
    toggleSidebar,
  ] = useToggle(classes.show);
  return (
    <>
      <button className={`icon ${classes.sidebar__toggle}`} onClick={toggleSidebar}>
        <TextalignLeft size="100%" />
      </button>
      <aside ref={sidebar__Ref} className={classes.sidebar}>
        {sidebarItems.map(({ key, title, url, icon }) => {
          const className =
            currentUrl == url
              ? classes.sidebar__item_active
              : classes.sidebar__item;

          return (
            <Link
              onClick={closeSidebar}
              key={key}
              to={url}
              className={className}
            >
              <span className="icon">
                {createElement(icon, { size: "100%" })}
              </span>
              {title}
            </Link>
          );
        })}
        <button
          onClick={() => dispatch(logoutUser())}
          className={classes.sidebar__item}
        >
          <span className="icon">
            <LogoutCurve size="100%" />
          </span>
          Logout
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
