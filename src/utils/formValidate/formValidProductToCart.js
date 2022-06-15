import { toast } from "react-toastify";

const formValidProductToCart = (values) => {
  if (values.size === null) {
    toast.error("Please Select Size !");
    return false;
  } else if (values.color === null) {
    toast.error("Please Select Color !");
    return false;
  }

  return true;
};

export default formValidProductToCart;
