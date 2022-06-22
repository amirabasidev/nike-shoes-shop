import { toast } from "react-toastify";

import validPassword from "./regex/validPassword";

const formValidLogin = (values) => {
  if (values.userName === "" || values.userName.length < 3) {
    toast.error("Username Must Be Longer Than 3 Letters !");
    return false;
  }

  if (values.password === "") {
    toast.error("Password Is Empty !");
    return false;
  } else if (!validPassword(values.password)) {
    toast.error(
      "The Password Must Have A Capital Letter, A Special Character And A Number",
    );
    return false;
  }

  return true;
};

export default formValidLogin;
