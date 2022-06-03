import { Link } from "react-router-dom";

import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} to="/">
        <img src="/src/assets/images/logo.png" alt="Logo" />
      </Link>
    </header>
  );
};

export default Header;
