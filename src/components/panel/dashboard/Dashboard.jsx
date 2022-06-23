import { useSelector } from "react-redux";
import { Bag, Calendar2, Simcard2 } from "iconsax-react";

import CardItem from "./cardItem/CardItem";

import classes from "./dashboard.module.css";

const Dashboard = () => {
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);

  const cardItems = [
    { key: 1, title: "Created At", Icon: Calendar2, value: user.date },
    { key: 2, title: "Phone", Icon: Simcard2, value: user.tel },
    { key: 3, title: "Products Cart", Icon: Bag, value: cart.length },
  ];

  return (
    <section className={classes.dashboard}>
      <section className={classes.card__items}>
        {cardItems.map(({ key, title, Icon, value }) => (
          <CardItem key={key} title={title} Icon={Icon} value={value} />
        ))}
      </section>
    </section>
  );
};

export default Dashboard;
