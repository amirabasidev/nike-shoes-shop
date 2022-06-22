import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { Login } from "../config/routes";

const PrivateRoute = () => {
  const isLogin = useSelector((state) => state.user.isLogin);

  return isLogin ? <Outlet /> : <Login />;
};

export default PrivateRoute;
