import { Link } from "react-router-dom";

import Navbar from './navbar/Navbar';
import HeaderActions from './headerActions/HeaderActions';

import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} to="/">
        <img src="/src/assets/images/logo.png" alt="Logo" />
      </Link>
      <Navbar />
      <HeaderActions />
    </header>
  );
};

export default Header;
