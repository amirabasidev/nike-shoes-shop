import Routes from "../../routes/Routes";
import Header from "../UI/header/Header";
import Footer from "../UI/footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
