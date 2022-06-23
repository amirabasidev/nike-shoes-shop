import { Link } from "react-router-dom";

const OrderItem = ({ order }) => {
  return (
    <tr>
      <td>{order.date}</td>
      <td>{order.products.length}</td>
      <td>{order.priceTotal} $</td>
      <td>
        <Link className="btn btn-primary" to={`${order.id}`}>View</Link>
      </td>
    </tr>
  );
};

export default OrderItem;
