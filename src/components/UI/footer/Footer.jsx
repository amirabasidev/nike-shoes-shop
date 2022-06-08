import { Link } from "react-router-dom";

import social from "../../../config/social";
import Logo from "../../../assets/images/logo.png";
import categories from "../../../config/categories";
import navbarItems from "../../../config/navbarItems";

import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__item}>
        <img className={classes.footer__logo} src={Logo} alt="footer logo" />
        <p className={classes.footer__description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          suscipit quod quaerat eligendi.
        </p>
      </div>
      <div className={classes.footer__item}>
        <h6>category</h6>
        {categories.map(({ key, title, url }) => (
          <Link key={key} className={classes.footer__link} to={url}>
            {title}
          </Link>
        ))}
      </div>
      <div className={classes.footer__item}>
        <h6>pages</h6>
        {navbarItems.map(({ key, title, url }) => (
          <Link key={key} className={classes.footer__link} to={url}>
            {title}
          </Link>
        ))}
      </div>
      <div className={classes.footer__item}>
        <h6>social</h6>
        <div className={classes.footer__social}>
          {social.map(({ key, Icon, url }) => (
            <a
              className={`icon ${classes.footer__social_item}`}
              key={key}
              href={url}
              target="_blank"
            >
              <Icon size="100%" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
