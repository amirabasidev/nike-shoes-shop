import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserAdd, UserCirlceAdd } from "iconsax-react";

import formValidRegister from "../../utils/formValidate/formValidRegister";

import classes from "./register.module.css";

const Register = () => {
  const navigate = useNavigate();

  const [isDisabled, setIsDisabled] = useState(false);
  const [values, setValues] = useState({
    name: "",
    family: "",
    userName: "",
    email: "",
    tel: "",
    password: "",
    address: "",
    zipCode: "",
    date: new Date(),
    role: "customer",
  });

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const createUser = async () => {
    setIsDisabled(true);
    try {
      const response = await fetch(
        `https://amirabasinasab.ir/nike/index.php/users`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "Application/json",
          },
        },
      );

      if (response.ok) {
        navigate("/login");
        toast.success("Create User Successfully!");
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setIsDisabled(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formValidRegister(values)) {
      createUser();
    }
  };

  return (
    <section className={classes.register}>
      <h1 className="head__xl">
        <span className="icon">
          <UserCirlceAdd size="100%" />
        </span>
        Register
      </h1>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            disabled={isDisabled}
            onChange={onChangeHandler}
            type="text"
            id="name"
          />
        </div>
        <div className="form-control">
          <label htmlFor="family">Family</label>
          <input
            disabled={isDisabled}
            onChange={onChangeHandler}
            type="text"
            id="family"
          />
        </div>
        <div className="form-control">
          <label htmlFor="userName">Username</label>
          <input
            disabled={isDisabled}
            onChange={onChangeHandler}
            type="text"
            id="userName"
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            disabled={isDisabled}
            onChange={onChangeHandler}
            type="text"
            id="email"
          />
        </div>
        <div className="form-control">
          <label htmlFor="tel">Phone</label>
          <input
            disabled={isDisabled}
            onChange={onChangeHandler}
            type="number"
            id="tel"
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            disabled={isDisabled}
            onChange={onChangeHandler}
            type="password"
            id="password"
          />
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <input
            disabled={isDisabled}
            onChange={onChangeHandler}
            type="text"
            id="address"
          />
        </div>
        <div className="form-control">
          <label htmlFor="zipCode">Zipcode</label>
          <input
            disabled={isDisabled}
            onChange={onChangeHandler}
            type="text"
            id="zipCode"
          />
        </div>
        <button
          disabled={isDisabled}
          type="submit"
          className="btn-icon btn-primary"
        >
          <span className="icon-white">
            <UserAdd size="100%" />
          </span>
          Register
        </button>
      </form>
    </section>
  );
};

export default Register;
