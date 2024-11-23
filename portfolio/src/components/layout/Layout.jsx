import Navbar from "./Navbar";
import Footer from "./Footer";
import ThemeSwitcher from "../atoms/ThemeSwitcher";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-end p-4">
        <ThemeSwitcher />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
