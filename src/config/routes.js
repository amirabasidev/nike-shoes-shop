import { lazy } from "react";

export const Home = lazy(() => import("../pages/home/Home"));
export const Product = lazy(() => import("../pages/product/Product"));
export const Cart = lazy(() => import("../pages/cart/Cart"));
export const Checkout = lazy(() => import("../pages/checkout/Checkout"));
export const Products = lazy(() => import("../pages/products/Products"));
export const Login = lazy(() => import("../pages/login/Login"));
export const Register = lazy(() => import("../pages/register/Register"));
export const PrivateRoute = lazy(() => import("../routes/PrivateRoute"));
export const Panel = lazy(() => import("../pages/panel/Panel"));
export const Dashboard = lazy(() => import("../components/panel/dashboard/Dashboard"));
export const Orders = lazy(() => import("../components/panel/orders/Orders"));
export const Order = lazy(() => import("../components/panel/order/Order"));
