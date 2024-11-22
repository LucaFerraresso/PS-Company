import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-gray-800 p-4">
      <Link to="/" className="text-white text-lg mx-4 hover:text-primary">
        Home
      </Link>
      <Link to="/about" className="text-white text-lg mx-4 hover:text-primary">
        Chi Sono
      </Link>
      <Link
        to="/projects"
        className="text-white text-lg mx-4 hover:text-primary"
      >
        Progetti
      </Link>
      <Link
        to="/contact"
        className="text-white text-lg mx-4 hover:text-primary"
      >
        Contatto
      </Link>
    </nav>
  );
};

export default Navbar;
