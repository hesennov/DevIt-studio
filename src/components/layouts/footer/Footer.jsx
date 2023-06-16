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
        background: "#DCDCDC",
      }}
    >
      <div>
        <img src={logo} alt="Logo" style={{ height: "90px" }} />
      </div>
      <div>
        <ul>
          <Link to="/about" style={{ marginRight: "1rem" }}>
            About Us
          </Link>
          <li style={{ width: "350px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
            amet posuere porta vitae mi accumsan ultricies.
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <Link to="/contact">Contact Us</Link>
          <li>Address</li>
          <li>Phone</li>
          <li>E-mail</li>
        </ul>
      </div>
      <div>
        <button style={{ marginRight: "1rem" }}>Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;
