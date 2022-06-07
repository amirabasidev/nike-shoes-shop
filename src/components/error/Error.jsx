import { ArrowRotateRight, Forbidden2 } from "iconsax-react";

import classes from "./error.module.css";

const Error = ({ retry, error }) => {
  return (
    <section className={classes.error}>
      <span className={`icon ${classes.error__icon}`}>
        <Forbidden2 size="100%" />
      </span>
      <p className={classes.error__text}>{error}</p>
      <button onClick={retry} className="btn-icon btn-primary">
        <span className={`icon ${classes.error__btn_icon}`}>
          <ArrowRotateRight size="100%" />
        </span>
        Retry
      </button>
    </section>
  );
};

export default Error;
