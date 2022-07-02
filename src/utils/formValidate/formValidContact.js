import { toast } from "react-toastify";

import validEmail from "./regex/validEmail";

const formValidContact = (values) => {
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
  } else if (!validEmail(values.email)) {
    toast.error(
      "The Password Must Have A Capital Letter, A Special Character And A Number",
    );
    return false;
  }

  if (values.message === "" || values.message.length < 3) {
    toast.error("Message Must Be Longer Than 3 Letters !");
    return false;
  }

  return true;
};

export default formValidContact;
