import Navbar from "./Navbar";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
