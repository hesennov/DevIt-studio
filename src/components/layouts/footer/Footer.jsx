import { Link } from "react-router-dom";
import logo from "../../../assets/logo-grey.png";
import { textColor } from "../../../constant/colors";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "1rem",
        color: textColor,
      }}
    >
      <div>
        <img
          src={logo}
          alt="Logo"
          style={{ height: "90px" }}
          className="font-extrabold"
        />
      </div>
      <div>
        <ul>
          <Link to="/about" style={{ marginRight: "1rem" }}>
            About Us
          </Link>
          <li
            style={{ width: "350px", fontWeight: 200 }}
            className="text-sm pt-8 leading-5"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
            amet posuere porta vitae mi accumsan ultricies. Commodo amet posuere
            porta vitae mi accumsan ultricies.
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <Link to="/contact">Contact Us</Link>
          <div className="text-sm" style={{ fontWeight: 200 }}>
            <li className="pt-8">Address: </li>
            <li className="pt-3">Phone: </li>
            <li className="pt-3">E-mail: </li>
          </div>
        </ul>
      </div>
      <div>
        <ul style={{ marginRight: "1rem" }}>
          Subscribe
          <form className="max-w-sm mx-auto flex pt-3">
            <input
              className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Your Email"
            />
            <button
              className="text-black font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
              type="submit"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </form>
          <div>
            <ul className="pt-4">
              Follow Us
              <li>Facebook Instagram Twitter</li>
            </ul>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
