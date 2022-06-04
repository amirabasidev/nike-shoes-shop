import classes from "./spinner.module.css";

const Spinner = ({ minHeight }) => {
  return (
    <div className={classes.spinner__wrapper} style={{ minHeight }}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Spinner;
