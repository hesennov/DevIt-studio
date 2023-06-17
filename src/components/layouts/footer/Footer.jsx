import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../../../assets/logo-grey.png";
import { primaryColor } from "../../../constant/colors";

const Footer = () => {
  const socialMediaPlatforms = [
    { icon: faFacebook, link: "https://www.facebook.com" },
    { icon: faInstagram, link: "https://www.instagram.com" },
    { icon: faTwitter, link: "https://www.twitter.com" },
  ];

  return (
    <footer className="py-8 text-black md:px-4 lg:px-24">
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "90px" }}
            className="font-extrabold"
          />
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="text-sm text-center md:text-left">
            <li className="mb-3">
              <Link to="/about" className="text-black">
                About Us
              </Link>
            </li>
            <li
              className="text-black leading-6 w-64"
              style={{ fontWeight: 200 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              amet posuere porta vitae mi accumsan ultricies.
            </li>
          </ul>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="text-sm text-center md:text-left">
            <li className="mb-3">
              <Link to="/contact">Contact Us</Link>
            </li>
            <div className="leading-6" style={{ fontWeight: 200 }}>
              <li className="mb-2">Address:</li>
              <li className="mb-2">Phone:</li>
              <li>E-mail:</li>
            </div>
          </ul>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="text-sm text-center md:text-left">
            <li className="mb-3">Subscribe</li>
            <form className="flex">
              <input
                className={`border rounded-lg py-1 px-3 text-gray-300 text-xs bg-${primaryColor} md:w-48 md:mr-1`}
                type="email"
                placeholder="Your Email"
              />
              <button className="text-black py-1 px-2" type="submit">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeWidth="3" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </form>
            <div className="pt-4">
              <p className="mb-2">Follow Us</p>
              <div className="flex justify-center md:justify-start">
                {socialMediaPlatforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2"
                  >
                    <FontAwesomeIcon icon={platform.icon} size="lg" />
                  </a>
                ))}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
