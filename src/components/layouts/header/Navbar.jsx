import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between bg-slate-700  p-10">
        <h1>logo</h1>
        <ul className="flex justify-between gap-20">
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
