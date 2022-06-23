import classes from "./cardItem.module.css";

const CardItem = ({ title, Icon, value }) => {
  return (
    <div className={classes.dashboard__card}>
      <span className={`icon ${classes.dashboard__card_icon}`}>
        <Icon size="100%" />
      </span>
      <h3 className={classes.dashboard__card_title}>{title}</h3>
      <h6 className={classes.dashboard__card_value}>{value}</h6>
    </div>
  );
};

export default CardItem;
