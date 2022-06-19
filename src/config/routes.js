import { lazy } from "react";

export const Home = lazy(() => import("../pages/home/Home"));
export const Product = lazy(() => import("../pages/product/Product"));
export const Cart = lazy(() => import("../pages/cart/Cart"));
export const Checkout = lazy(() => import("../pages/checkout/Checkout"));
export const Products = lazy(() => import("../pages/products/Products"));