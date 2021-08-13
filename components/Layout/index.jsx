import Navbar from './Navbar';
import Footer from './Footer';
import Bttbtn from './Bttbtn';

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  <Bttbtn/>
    <Footer />
  </>
);

export default Layout;
