import { useSelector } from "react-redux";

import useFetch from "../../../hooks/useFetch";

import Spinner from "../../UI/spinner/Spinner";
import Error from "../../error/Error";
import Table from "../../UI/table/Table";
import OrderItem from "../../UI/table/orderItem/OrderItem";
import OrderEmpty from "./orderEmpty/OrderEmpty";

const Orders = () => {
  const user = useSelector((state) => state.user.user);

  const {
    data: orders,
    loading,
    error,
    getData: getOrders,
  } = useFetch(
    [],
    `https://amirabasinasab.ir/shop/index.php/orders?email='${user.email}'`,
  );

  const ordersHead = ["Date", "Quantity", "TotalPrice", "Details"];

  return (
    <section>
      {loading ? (
        <Spinner minHeight="220px" />
      ) : error !== null ? (
        <Error error={error} retry={getOrders} />
      ) : orders.length > 0 ? (
        <Table
          headData={ordersHead}
          bodyData={orders}
          renderBody={(order) => <OrderItem order={order} />}
        />
      ) : (
        <OrderEmpty />
      )}
    </section>
  );
};

export default Orders;
