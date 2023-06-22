import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo-white.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="md:px-4 flex justify-between text-black lg:px-24 text-sm z-40 bg-gradient-to-r from-pink-50 via-blue-50 to-white "
      style={{ fontWeight: 300 }}
    >
      <div>
        <img src={logo} alt="Logo" style={{ height: "90px" }} />
      </div>
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:items-center md:ml-24 md:space-x-16`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="md:hidden">
        <button type="button" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
