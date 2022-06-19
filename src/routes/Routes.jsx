import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Home, Product, Cart, Checkout, Products } from "../config/routes";

import Spinner from "../components/UI/spinner/Spinner";

const publicRoute = () => {
  return (
    <Suspense fallback={<Spinner minHeight="80vh" />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:name" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category/:categoryName" element={<Products />} />
      </Routes>
    </Suspense>
  );
};

export default publicRoute;
