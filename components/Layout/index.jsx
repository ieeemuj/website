import Navbar from './Navbar';
import Footer from './Footer';

export const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
