import { Layer } from "iconsax-react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import { getItems, addItem } from "../../../services/LocalStorage";

import classes from "./productActions.module.css";

const ProductActions = () => {
  const { product } = useSelector((state) => state.product);

  const addProductToCompare = () => {
    const compareItems = getItems("compare");

    const findProduct = compareItems.some(
      (productId) => productId === product.id,
    );

    if (findProduct) {
      toast.warning("Product Is Compare");
    } else {
      addItem("compare", product.id);
      toast.success("Add To Compare successfully !");
    }
  };

  return (
    <section className={classes.product__actions}>
      <button
        onClick={addProductToCompare}
        className={`icon ${classes.product__actions_icon}`}
      >
        <Layer size="100%" />
      </button>
    </section>
  );
};

export default ProductActions;
