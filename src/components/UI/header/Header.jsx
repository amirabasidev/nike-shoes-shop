import { Link } from "react-router-dom";

import Navbar from './navbar/Navbar';

import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} to="/">
        <img src="/src/assets/images/logo.png" alt="Logo" />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
