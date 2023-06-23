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
          className="pr-24 pt-12"
        />
      </div>
      <div className="text-container">
        <p className="uppercase text-xs pb-2">About us</p>
        <h1
          className="text-5xl pt-2 md:pt-2 lg:pt-2 xl:pt-2 lg:z-1 pt-20"
          style={{ fontWeight: 700, color: headerColor }}
        >
          Design &amp; Develop For Better Solution
        </h1>
        <p
          className="pt-7 sm:pt-7 lg:pt-7 md:w-5/6 pb-4"
          style={{ fontWeight: 300 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies
          lacus ut mauris consequat, sed efficitur mauris finibus. Nullam
          lobortis dapibus ante, vitae congue massa bibendum ut. Suspendisse
          auctor, est sit amet tempor placerat, risus erat consequat ligula, a
          cursus nunc justo vel justo.
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
