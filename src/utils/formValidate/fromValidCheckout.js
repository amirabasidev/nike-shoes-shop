import { toast } from "react-toastify";

const fromValidCheckout = (values) => {
  if (values.name === "" || values.name.length < 3) {
    toast.error("Name Must Be Longer Than 3 Letters !");
    return false;
  }
  if (values.family === "" || values.family.length < 3) {
    toast.error("Family Must Be Longer Than 3 Letters !");
    return false;
  }
  if (values.email === "") {
    toast.error("Email Is Empty !");
    return false;
  }
  if (values.phone === "" || values.phone.length !== 10) {
    toast.error("Phone Number Must Be 10 Digits !");
    return false;
  }
  if (values.address === "") {
    toast.error("Address Is Empty !");
    return false;
  }
  if (values.zipCode === "" || values.zipCode.length !== 10) {
    toast.error("zipCode Number Must Be 10 Digits !");
    return false;
  }
  if (values.pricePost === null) {
    toast.error(`Please Select Post !`);
    return false;
  }

  return true;
};

export default fromValidCheckout;
