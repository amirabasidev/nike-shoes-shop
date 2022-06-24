import { Link } from "react-router-dom";

import useToggle from "../../../hooks/useToggle";

import Navbar from "./navbar/Navbar";
import HeaderActions from "./headerActions/HeaderActions";
import SearchBar from "./searchBar/SearchBar";

import classes from "./header.module.css";

import Logo from '../../../assets/images/logo.png';

const Header = () => {
  const [searchBar__Ref, openSearchBar, closeSearchBar, SearchBarContainer] =
    useToggle(classes.search__bar_show);

  return (
    <header className={classes.header}>
      <Link className={classes.logo} to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <Navbar />
      <HeaderActions openSearchBar={openSearchBar} />
      <SearchBar
        searchBar__Ref={searchBar__Ref}
        SearchBarContainer={SearchBarContainer}
        closeSearchBar={closeSearchBar}
      />
    </header>
  );
};

export default Header;
