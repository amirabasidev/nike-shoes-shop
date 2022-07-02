import { useState } from "react";
import { Send2 } from "iconsax-react";
import { toast } from "react-toastify";

import formValidContact from "../../../utils/formValidate/formValidContact";

const defaultValues = {
  name: "",
  family: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [values, setValues] = useState(defaultValues);

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (formValidContact(values)) {
      sendContact();
    }
  };

  const sendContact = async () => {
    setIsDisabled(true);
    try {
      const response = await fetch(
        `http://amirabasinasab.ir/nike/index.php/contact`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "Application/json",
          },
        },
      );

      if (response.ok) {
        setValues(defaultValues);
        toast.success("Send Contact Successfully !");
      }
      
    } catch (error) {
      toast.error(error);
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          disabled={isDisabled}
          onChange={onChangeHandler}
          value={values.name}
          id="name"
          type="text"
        />
      </div>
      <div className="form-control">
        <label htmlFor="family">Family</label>
        <input
          disabled={isDisabled}
          onChange={onChangeHandler}
          value={values.family}
          id="family"
          type="text"
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          disabled={isDisabled}
          onChange={onChangeHandler}
          value={values.email}
          id="email"
          type="text"
        />
      </div>
      <div className="form-control">
        <label htmlFor="message">Message</label>
        <textarea
          disabled={isDisabled}
          onChange={onChangeHandler}
          value={values.message}
          id="message"
        ></textarea>
      </div>
      <button disabled={isDisabled} className="btn-icon btn-primary">
        Send
        <span className="icon-white">
          <Send2 size="100%" />
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
