import { toast } from "react-toastify";

import validEmail from "./regex/validEmail";
import validPassword from "./regex/validPassword";

const formValidRegister = (values) => {
  if (values.name === "" || values.name.length < 3) {
    toast.error("Name Must Be Longer Than 3 Letters !");
    return false;
  }

  if (values.family === "" || values.family.length < 3) {
    toast.error("Family Must Be Longer Than 3 Letters !");
    return false;
  }

  if (values.userName === "" || values.userName.length < 3) {
    toast.error("Username Must Be Longer Than 3 Letters !");
    return false;
  }

  if (values.email === "") {
    toast.error("Email Is Empty !");
    return false;
  } else if (!validEmail(values.email)) {
    toast.error(
      "The Password Must Have A Capital Letter, A Special Character And A Number",
    );
    return false;
  }

  if (values.password === "") {
    toast.error("Password Is Empty !");
    return false;
  } else if (!validPassword(values.password)) {
    toast.error("The Entered Password Format Is Incorrect");
    return false;
  }

  if (values.tel === "" || values.tel.length !== 10) {
    toast.error("Phone Number Must Be 10 Digits !");
    return false;
  }

  return true;
};

export default formValidRegister;
