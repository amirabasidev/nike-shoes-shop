import { toast } from "react-toastify";

const formValidComment = (values) => {
  if (values.name === "") {
    toast.error("Name Is Empty !");
    return false;
  } else if (values.email === "") {
    toast.error("Email Is Empty !");
    return false;
  } else if (values.text === "") {
    toast.error("Text Is Empty !");
    return false;
  }

  return true;
};

export default formValidComment;
