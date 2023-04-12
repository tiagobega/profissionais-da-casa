import Header from "components/Header";
import Footer from "components/Footer";

import type { LayoutTypesProps } from "./types";

const Layout = ({ children }: LayoutTypesProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
