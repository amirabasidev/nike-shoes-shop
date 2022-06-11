import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./assets/css/global.css";

// import Files Swiper Style Css
import "swiper/css";
import "swiper/css/effect-fade";

ReactDOM.createRoot(document.getElementById('container')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
