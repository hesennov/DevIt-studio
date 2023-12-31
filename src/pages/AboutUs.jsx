import { headerColor } from "../constant/colors";
import aboutUs from "../assets/dizzy-browser-window-with-the-code.gif";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </div>
    </section>
  );
}

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row text-center md:text-left lg:text-left pb-20">
      <div className="image-container flex items-center justify-center">
        <img
          src={aboutUs}
          alt="About Us"
          style={{ width: "2700px" }}
          className="lg:pr-32 sm:pr-12 sm:pt-0 pt-0 md:pt-10 lg:pt-7 w-full md:w-full pb-8"
        />
      </div>
      <div className="text-container">
        <p className="uppercase text-xs pb-2">About us</p>
        <Section>
          <h1
            className="text-5xl pt-2 md:pt-2 lg:pt-2 xl:pt-2 lg:z-1 text-center md:text-left lg:text-left font-bold"
            style={{ color: headerColor }}
          >
            Design &amp; Develop
            <br className="block" />
            For Better Solution
          </h1>
        </Section>
        <p className="pt-7 sm:pt-7 lg:pt-7 md:w-5/6 pb-4 font-light">
          We believe in the power of collaboration and transparency. From the
          initial consultation to project completion, we involve you at every
          step of the development process. Our team takes the time to understand
          your unique requirements, providing valuable insights and suggestions
          to shape the perfect solution for your business.
        </p>
        <div className="mt-2 flex justify-center md:justify-start">
          <Link to="/about">
            <button className="mt-2 px-8 py-3 rounded-xl text-white text-xs font-light bg-indigo-400 hover:bg-indigo-500">
              Learn more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
