import Routes from "../../routes/Routes";
import Header from "../UI/header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
      {/* Footer */}
    </>
  );
};

export default Layout;
