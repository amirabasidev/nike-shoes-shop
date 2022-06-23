import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getUser } from "../../redux/user/userActions";

import Error from "../../components/error/Error";
import Spinner from "../../components/UI/spinner/Spinner";

import classes from "./panel.module.css";

const Panel = () => {
  const { user, loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const retryGetUser = () => dispatch(getUser());

  return (
    <section className={classes.panel}>
      {loading ? (
        <Spinner minHeight="inherit" />
      ) : error !== null ? (
        <Error error={error} retry={retryGetUser} />
      ) : (
        user !== null && (
          <>
            {/* SideBar */}
            <section className={classes.panel__content}>
              <Outlet />
            </section>
          </>
        )
      )}
    </section>
  );
};

export default Panel;
