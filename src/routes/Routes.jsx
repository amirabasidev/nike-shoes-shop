import { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import {
  Home,
  Product,
  Cart,
  Checkout,
  Products,
  Login,
  Register,
  PrivateRoute,
  Panel,
  Dashboard,
  Orders,
  Order,
  Profile,
  Compare,
  Contact,
} from "../config/routes";

import Spinner from "../components/UI/spinner/Spinner";

const publicRoute = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Suspense fallback={<Spinner minHeight="80vh" />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:name" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category/:categoryName" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<PrivateRoute />}>
          <Route path="/panel" element={<Panel />}>
            <Route path="" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="orders/:orderId" element={<Order />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default publicRoute;
