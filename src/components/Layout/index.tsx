import Header from "components/Header";
import Footer from "components/Footer";
import { Outlet } from "react-router-dom";
import { Main } from "components/Main";

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
