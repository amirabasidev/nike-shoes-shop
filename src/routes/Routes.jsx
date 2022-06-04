import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../config/routes";

import Spinner from "../components/UI/spinner/Spinner";

const publicRoute = () => {
  return (
    <Suspense fallback={<Spinner minHeight="80vh"/>}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default publicRoute;
