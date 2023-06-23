import { headerColor } from "../constant/colors";
import { primaryColor } from "../constant/colors";
import aboutUs from "../assets/dizzy-browser-window-with-the-code.gif";

const AboutUs = () => {
  return (
    <div className="about-us-container flex flex-row pt-0">
      <div className="image-container">
        <img
          src={aboutUs}
          alt="About Us"
          style={{ width: "2000px" }}
          className="pr-24 pt-10"
        />
      </div>
      <div className="text-container">
        <p className="uppercase text-xs pb-2">About us</p>
        <h1
          className="text-5xl pt-2 md:pt-2 lg:pt-2 xl:pt-2 lg:z-1 pt-20"
          style={{ fontWeight: 700, color: headerColor }}
        >
          Design &amp; Develop
          <br className="block" />
          For Better Solution
        </h1>
        <p
          className="pt-7 sm:pt-7 lg:pt-7 md:w-5/6 pb-4"
          style={{ fontWeight: 300 }}
        >
          We believe in the power of collaboration and transparency. From the
          initial consultation to project completion, we involve you at every
          step of the development process. Our team takes the time to understand
          your unique requirements, providing valuable insights and suggestions
          to shape the perfect solution for your business.
        </p>
        <button
          className={`mt-3 px-8 py-3 rounded-xl text-white text-xs`}
          style={{ fontWeight: 300, background: primaryColor }}
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
