import { Link } from "react-router-dom";

import Navbar from './navbar/Navbar';
import HeaderActions from './headerActions/HeaderActions';

import classes from "./header.module.css";

import Logo from '../../../assets/images/logo.png';

const Header = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <Navbar />
      <HeaderActions />
    </header>
  );
};

export default Header;
