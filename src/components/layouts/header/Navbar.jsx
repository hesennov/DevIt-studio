import { Link } from "react-router-dom";
import logo from "../../../assets/logo-white.png";
import styled from "./Navbar.module.scss";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="lg:container mx-auto lg:pt-8">
      <div
        className={
          "flex justify-between shadow-lg align-middle bg-gray-50 py-4 px-8 md:px-10 lg:px-10 items-center lg:rounded-lg relative z-50"
        }
      >
        <div>
          <Link to="/">
            <img
              src={logo}
              className="h-10"
              alt="Logo"
              style={{ height: "90px" }}
            />
          </Link>
        </div>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-start min-w-[300px] md:min-w-[400px] min-h-full bg-black text-white px-6 py-6">
                <div className="flex items-center justify-between w-full pb-5">
                  <Link to="/">
                    <img
                      src={logo}
                      className="h-10"
                      alt="Logo"
                      style={{ height: "90px" }}
                    />
                  </Link>
                  <div
                    className="CROSS-ICON px-2 py-2"
                    onClick={() => setIsNavOpen(false)}
                  >
                    <svg
                      className="h-8 w-8 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                </div>
                <h3 className="pb-6 font-semibold text-md md:text-lg">
                  We deploy world-class <br /> Creative on demand
                </h3>
                <li className="my-1">
                  <Link
                    to="/"
                    className="text-xs uppercase md:text-sm hover:text-indigo-600 font-semibold ease-in-out duration-300"
                  >
                    homepage
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    to="/about"
                    className="cursor-pointer text-xs uppercase md:text-sm hover:text-indigo-600 font-semibold ease-in-out duration-300"
                  >
                    About
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    to="/blogs"
                    className="cursor-pointer text-xs uppercase md:text-sm hover:text-indigo-600 font-semibold ease-in-out duration-300"
                  >
                    Blog
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    to="/contact"
                    className="text-xs uppercase md:text-sm hover:text-indigo-600 font-semibold ease-in-out duration-300"
                  >
                    Contact
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    to="/"
                    className="cursor-pointer text-xs uppercase md:text-sm hover:text-indigo-600 font-semibold ease-in-out duration-300"
                  >
                    Faq
                  </Link>
                </li>
                <h3 className="pt-10 pb-5 font-semibold text-sm md:text-md text-gray-500 uppercase">
                  Contact us
                </h3>
                <li>
                  <Link
                    to="/address"
                    className="text-xs uppercase md:text-sm hover:text-indigo-600 font-semibold ease-in-out duration-300"
                  >
                    Melbone st, Australia, Ny 12099
                  </Link>
                </li>
                <li>
                  <Link
                    to={`tel:+81 800 123 456 78`}
                    className="text-xs uppercase md:text-sm hover:text-indigo-600 font-semibold ease-in-out duration-300"
                  >
                    +1 999 999 99 9
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/email`}
                    className="text-xs uppercase md:text-sm hover:text-indigo-600 font-semibold ease-in-out duration-300"
                  >
                    office@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          <ul className="gap-10 hidden lg:inline-flex">
            <li className={styled.has_dropdown}>
              <Link
                to="/"
                className="cursor-pointer font-semibold text-gray-400 hover:text-indigo-600 ease-in-out duration-300"
              >
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/about"
                className="cursor-pointer font-semibold text-gray-400 hover:text-indigo-600 ease-in-out duration-300"
              >
                About
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/blogs"
                className="p-2 font-semibold text-gray-400 hover:text-indigo-600 ease-in-out duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={
                  "p-2 font-semibold text-gray-400 hover:text-indigo-600 ease-in-out duration-300"
                }
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" className={""}>
                <p className="cursor-pointer font-semibold text-gray-400 hover:text-indigo-600 ease-in-out duration-300">
                  FAQ
                </p>
              </Link>
            </li>
          </ul>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #000000ab;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: end;
      }
    `}</style>
        <button
          type="button"
          className="hidden lg:inline-flex duration-300 ease-in-out w-full justify-center rounded-md shadow-lg bg-white px-10 font-bold py-5 text-base text-gray-700 hover:text-white hover:bg-indigo-600 active:bg-indigo-600 focus:outline-none focus:ring focus:bg-indigo-300 sm:mt-0 sm:ml-10 sm:w-auto sm:text-sm"
        >
          How It Works
        </button>
      </div>
    </div>
  );
};

export default Navbar;
