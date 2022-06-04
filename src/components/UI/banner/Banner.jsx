import { Link } from "react-router-dom"; 
import { ArrowRight } from "iconsax-react";

import classes from "./banner.module.css";

const Banner = () => {
  return (
    <>
      <section className={classes.banner}>
        <div className={classes.banner__img}>
          <img src="/src/assets/images/shoes_banner.png" alt="Shoes Banner" />
        </div>
        <div className={classes.banner__content}>
          <h1 className={classes.banner__content_title}>
            Summer <br /> Collection
          </h1>
          <p className={classes.banner__content_desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            hic quo aliquid laboriosam ipsam. Tenetur at facilis natus
            consequuntur non voluptates, dolore ipsum minus doloremque molestias
            impedit libero, aut sapiente!
          </p>
          <h5 className={classes.banner__content_price}>512 $</h5>
          <Link to="/" className="btn-icon btn-white">
            Buy Now
            <span className="icon">
              <ArrowRight size="100%" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Banner;
