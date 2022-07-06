import { Link } from "react-router-dom";
import { ArrowRight } from "iconsax-react";

import classes from "./notFound.module.css";
import notFoundImg from "../../assets/images/404.png";

const NotFound = () => {
  return (
    <section className={classes.not__found}>
      <div className={classes.not__found_img}>
        <img src={notFoundImg} alt="404" />
      </div>
      <h1 className={classes.not__found_text}>Not Page !</h1>
      <Link to="/" className="btn-icon btn-primary">
        Go To Home
        <span className="icon-white">
          <ArrowRight size="100%" />
        </span>
      </Link>
    </section>
  );
};

export default NotFound;
