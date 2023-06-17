import { Link } from "react-router-dom";
import logo from "../../../assets/logo-grey.png";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between">
        <div>
          <img src={logo} alt="Logo" className="h-28" />
        </div>
        <ul className="flex gap-10 ">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about"> About Us</Link>
          </li>
          <li>
            <Link to="/portofilo">Portofilo</Link>
          </li>
          <li>
            <Link to="/news"> News</Link>
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
