import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import store from "./redux/store";

import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
