import classes from "./tabTitle.module.css";

const TabTitle = ({ activeTab, setActiveTab, icon, title, index }) => {
  const className =
    activeTab === index ? classes.tabs__item_active : classes.tabs__item;

  const activeTabHandler = () => setActiveTab(index);
  return (
    <li className={className} onClick={activeTabHandler}>
      <span className="icon">{icon}</span>
      {title}
    </li>
  );
};

export default TabTitle;
