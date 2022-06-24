import { useState } from "react";
import { toast } from "react-toastify";
import { UserEdit } from "iconsax-react";
import { useSelector } from "react-redux";

import classes from "./profile.module.css";

const Profile = () => {
  const { user } = useSelector((state) => state.user);

  const [isDisabled, setIsDisabled] = useState(false);
  const [values, setValues] = useState(user);

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const editUser = async () => {
    setIsDisabled(true);
    try {
      const response = await fetch(
        `https://amirabasinasab.ir/nike/user/index.php?id=${user.id}`,
        {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "Application/json",
          },
        },
      );

      if (response.ok) {
        const newToken =  await response.text();
        localStorage.setItem("token", newToken);
        toast.success("Edit User Successfully!");
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <>
      <form className={classes.form}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            disabled={isDisabled}
            value={values.name}
            onChange={onChangeHandler}
            id="name"
            type="text"
          />
        </div>
        <div className="form-control">
          <label htmlFor="family">Family</label>
          <input
            disabled={isDisabled}
            value={values.family}
            onChange={onChangeHandler}
            id="family"
            type="text"
          />
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <input
            disabled={isDisabled}
            value={values.address}
            onChange={onChangeHandler}
            id="address"
            type="text"
          />
        </div>
        <div className="form-control">
          <label htmlFor="zipCode">Zipcode</label>
          <input
            disabled={isDisabled}
            value={values.zipCode}
            onChange={onChangeHandler}
            id="zipCode"
            type="text"
          />
        </div>
        <div className="form-control">
          <label htmlFor="tel">Phone</label>
          <input
            disabled={isDisabled}
            value={values.tel}
            onChange={onChangeHandler}
            id="tel"
            type="number"
          />
        </div>
      </form>
      <button
        onClick={editUser}
        disabled={isDisabled}
        className="btn-icon btn-success"
      >
        <span className="icon-white">
          <UserEdit size="100%" />
        </span>
        Edit Profile
      </button>
    </>
  );
};

export default Profile;
