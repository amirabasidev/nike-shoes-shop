import classes from './tab.module.css';

const Tab = ({ children }) => {
  return <div className={classes.tab}>{children}</div>;
};

export default Tab;
