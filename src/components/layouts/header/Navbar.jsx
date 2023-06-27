import { Link } from "react-router-dom";
import logo from "../../../assets/logo-white.png";
import styled from "./Navbar.module.scss";
import { useState } from "react";
import { headerColor } from "../../../constant/colors";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="top-0 z-50">
      <div className="lg:container mx-auto lg:pt-8">
        <div
          className={
            "flex justify-between align-middle bg-gray-50 py-4 px-8 md:px-10 lg:px-10 items-center lg:rounded-lg relative z-50"
          }
          style={{
            backgroundColor: "rgba(250, 250, 250, 0.8)",
            backdropFilter: "blur(12px)",
          }}
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
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-start min-w-[300px] md:min-w-[400px] min-h-full bg-gray-50 text-black   px-6 py-6">
                  <div className="flex items-center justify-between w-full pb-5">
                    <Link to="/">
                      <img src={logo} alt="Logo" style={{ height: "90px" }} />
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
                      className="text-xs uppercase md:text-sm hover:text-indigo-600 font-extralight ease-in-out duration-300"
                    >
                      Homepage
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link
                      to="/about"
                      className="cursor-pointer text-xs uppercase md:text-sm hover:text-indigo-600 font-extralight ease-in-out duration-300"
                    >
                      About
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link
                      to="/blogs"
                      className="cursor-pointer text-xs uppercase md:text-sm hover:text-indigo-600 font-extralight ease-in-out duration-300"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link
                      to="/contact"
                      className="text-xs uppercase md:text-sm hover:text-indigo-600 font-extralight ease-in-out duration-300"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="my-1"></li>
                  <h3 className="pt-10 pb-5 font-extralight text-sm md:text-md text-gray-500 uppercase">
                    Contact us
                  </h3>
                  <li>
                    <Link
                      to="/address"
                      className="text-xs uppercase md:text-sm hover:text-indigo-600 font-semibold ease-in-out duration-300"
                    >
                      Azerbaijan, AZ1001
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`tel:`}
                      className="text-xs uppercase md:text-sm hover:text-indigo-600 font-semibold ease-in-out duration-300"
                    >
                      +994 99 999 99 99
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/email`}
                      className="text-xs uppercase md:text-sm hover:text-indigo-600 font-semibold ease-in-out dura18on-300"
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
                  className="pr-14 cursor-pointer font-semibold text-black hover:text-indigo-600 ease-in-out duration-300 font-extralight text-sm"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about"
                  className="pr-14 cursor-pointer font-semibold text-black hover:text-indigo-600 ease-in-out duration-300 font-extralight text-sm"
                >
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/blogs"
                  className="pr-14 font-semibold text-black hover:text-indigo-600 ease-in-out duration-300 font-extralight text-sm"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  className={
                    "pr-14 font-semibold text-black hover:text-indigo-600 ease-in-out duration-300 font-extralight text-sm"
                  }
                >
                  Contact
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
