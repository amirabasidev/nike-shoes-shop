import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { LoginCurve, Login as LoginIcon } from "iconsax-react";

import { getUser } from "../../redux/user/userActions";
import formValidLogin from "../../utils/formValidate/formValidLogin";

import Spinner from "../../components/UI/spinner/Spinner";

import classes from "./login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogin, loading } = useSelector((state) => state.user);

  const [isDisabled, setIsDisabled] = useState(false);
  const [values, setValues] = useState({
    userName: "",
    password: "",
  });

  const loginUser = async (e) => {
    setIsDisabled(true);
    try {
      const response = await fetch("https://amirabasinasab.ir/nike/user/", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "Application/json",
        },
      });

      if (response.status === 200) {
        const token = await response.text();
        localStorage.setItem("token", token);
        toast.success("Login Successfully !");
        dispatch(getUser());
      } else if (response.status === 404) {
        toast.error(await response.text());
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setIsDisabled(false);
    }
  };

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formValidLogin(values)) {
      loginUser();
    }
  };

  useEffect(() => {
    isLogin && navigate("/panel");
  }, [isLogin]);

  return (
    <section className={classes.login}>
      {loading ? (
        <Spinner minHeight="inherit" />
      ) : (
        <>
          <h1 className="head__xl">
            <span className="icon">
              <LoginCurve size="100%" />
            </span>
            Login
          </h1>
          <form onSubmit={submitHandler}>
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
              <label htmlFor="password">Password</label>
              <input
                disabled={isDisabled}
                onChange={onChangeHandler}
                type="password"
                id="password"
              />
            </div>
            <button
              disabled={isDisabled}
              type="submit"
              className="btn-icon btn-primary"
            >
              <span className="icon-white">
                <LoginIcon size="100%" />
              </span>
              Login
            </button>
          </form>
          <h6 className="head__md">
            Not a Member ? <Link to="/register">Register</Link>
          </h6>
        </>
      )}
    </section>
  );
};

export default Login;
